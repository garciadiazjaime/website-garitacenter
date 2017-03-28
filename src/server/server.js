/* eslint max-len: [2, 500, 4] */
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import bodyParser from 'body-parser';

import cacheHelper from './helpers/cacheHelper';
import DataWrapper from './dataWrapper';
import config from '../../config';
import userRoutes from './routes/userRoutes';
import routes from '../shared/config/routes';
import ReportController from './controllers/reportController';
import metaHelper from './helpers/metaHelper';

const app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(express.static('static'));
app.use('/user', userRoutes);

const city = 'TIJUANA';
const reportController = new ReportController();

app.get('/health', (req, res) => {
  res.writeHead(200);
  res.end();
});

app.get('/*', (req, res, next) => {
  if (req.url.indexOf('/images/') === 0) {
    res.setHeader('Cache-Control", "public, max-age=2592000');
    res.setHeader('Expires', new Date(Date.now() + 2592000000).toUTCString());
  }
  next();
});


app.get('/*', cacheHelper(), (req, res) => {
  const metaData = metaHelper(req.url);
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      reportController.getReport(city)
        .then((results) => {
          const props = {
            city,
            report: results,
          };
          const content = renderToString(<DataWrapper data={props}><RoutingContext {...renderProps} /></DataWrapper>);
          res.render('index', { content, props, metaData });
        })
        .catch((err) => {
          console.log('err', err);
          const props = {
            city,
            report: [],
          };
          const content = renderToString(<DataWrapper data={props}><RoutingContext {...renderProps} /></DataWrapper>);
          res.render('index', { content, props, metaData });
        });
    } else {
      res.status(404).send('Not found');
    }
  });
});

app.set('ipaddress', config.get('ipaddress'));
app.set('port', config.get('port'));

const server = app.listen(app.get('port'), app.get('ipaddress'), (err) => {
  if (err) {
    console.log(err);
  }
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

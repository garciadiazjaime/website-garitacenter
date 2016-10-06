/* eslint max-len: [2, 500, 4] */
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import bodyParser from 'body-parser';

import DataWrapper from './dataWrapper';
import config from '../../config';
import apiRoutes from './helpers/api';
import userRoutes from './routes/userRoutes';
import routes from '../shared/config/routes';
import ReportController from './controllers/reportController';

const app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use(express.static('static'));

app.use('/api', apiRoutes);
app.use('/user', userRoutes);

const city = 'TIJUANA';
const reportController = new ReportController();

app.get('/health', (req, res) => {
  res.writeHead(200);
  res.end();
});

app.get('/*', (req, res) => {
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
          res.render('index', { content, props });
        })
        .catch((err) => {
          console.log('err', err);
          const props = {
            city,
            report: [],
          };
          const content = renderToString(<DataWrapper data={props}><RoutingContext {...renderProps} /></DataWrapper>);
          res.render('index', { content, props });
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

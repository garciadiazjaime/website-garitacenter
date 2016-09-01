const express = require('express');
/*eslint-disable */
const router = express.Router();
import RequestUtil from '../../../shared/utils/requestUtil';
/*eslint-enable */
const config = require('../../../../config.js');

router.get('/report', (req, res) => {
  const apiUrl = `${config.get('api.url')}user/report?city=tijuana`;
  RequestUtil.get(apiUrl)
    .then((results) => {
      res.status(200).send(results.entity);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.post('/report', (req, res) => {
  const apiUrl = `${config.get('api.url')}user/report`;
  const data = req.body;
  RequestUtil.post(apiUrl, data)
    .then((results) => {
      res.status(200).send(results.entity);
    })
    .catch((error) => {
      res.send(error);
    });
});

export default router;

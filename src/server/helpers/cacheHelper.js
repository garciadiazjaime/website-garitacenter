/* eslint-disable no-param-reassign */
import mcache from 'memory-cache';

const getCacheTime = (url) => {
  if (url === '/') {
    // cache set to 2 minutes in secs
    return 120;
  } else if (url === '/encuesta') {
    // cache set to 1 month in secs
    return 2592000;
  } else if (url === '/reporte-usuario') {
    // cache set to 1 minute in secs
    return 60;
  }
  // anything else let's wait 5 mins in secs
  return 300;
};

export default function () {
  return (req, res, next) => {
    const url = req.originalUrl || req.url;
    const duration = getCacheTime(url);
    const key = '__express__' + url;
    const cachedBody = mcache.get(key);
    if (cachedBody) {
      res.send(cachedBody);
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      next();
    }
  };
}

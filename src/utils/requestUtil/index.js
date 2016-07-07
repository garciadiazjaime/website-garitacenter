import request from 'request';

export default class RequestUtil {

  static get(url) {
    return new Promise((resolve, reject) => {
      request(url, (error, response, html) => {
        if (error) {
          reject(error);
        } else {
          resolve(html);
        }
      });
    });
  }

  /*
    Request method post
    @param {string} string
    @param {data} data
    @returns {object}
  */
  static post(url, data) {
    return new Promise((resolve, reject) => {
      request({
        url,
        method: 'POST',
        json: data,
      }, (error, response, body) => {
        if (!error && response.statusCode === 201) {
          resolve(body);
        } else {
          reject(error || body);
        }
      });
    });
  }
}

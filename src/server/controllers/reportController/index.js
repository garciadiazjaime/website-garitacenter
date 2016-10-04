/* eslint max-len: [2, 500, 4] */
import _ from 'lodash';
import RequestUtil from '../../../shared/utils/requestUtil';
import config from '../../../../config';

export default class ReportController {

  constructor() {
    this.proxy = {};
    this.requestsPerMinute = {};
    this.updated = {};
    this.apiUrl = `${config.get('api.url')}report?city=`;
  }

  /*
   * Checks if it's time to do an update.
   * @param {date} lastUpdate When was last update
   * @return {boolean} true when last udpate is minor than current time minus one minute, otherwise false
  */
  doUpdate(lastUpdate) {
    if (lastUpdate) {
      const nowDate = new Date();
      const minutesToWait = 1;
      const lastNMinutes = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), nowDate.getHours(), nowDate.getMinutes() - minutesToWait, nowDate.getSeconds());
      return lastUpdate < lastNMinutes ? true : false;
    }
    return true;
  }

  /*
   * Get port report using proxy. Returns a promise which is resolved with the city report data.
   * @param {string} city City name
   * @return {promise} resolve(report)
  */
  getReport(city) {
    return new Promise((resolve, reject) => {
      const promises = [];
      if (!this.proxy[city] || this.doUpdate(this.updated[city])) {
        console.log(`Update report for ${city}, last update: ${this.updated[city]}, new date: ${new Date()}, Request per Minute: ${this.requestsPerMinute[city]}`);
        promises.push(RequestUtil.get(`${this.apiUrl}${city}`));
        this.requestsPerMinute[city] = 1;
      } else {
        this.requestsPerMinute[city]++;
      }
      Promise.all(promises)
        .then((results) => {
          if (_.isArray(results) && results.length) {
            this.proxy[city] = results[0].entity;
            this.updated[city] = new Date();
          }
          resolve(this.proxy[city]);
        })
        .catch((error) => reject(error));
    });
  }
}

/* eslint max-len: [2, 500, 4] */
import GaUtil from 'util-ganalytics';
const enable = false;

export default class GaUtilAdapter {

  static init() {
    if (enable) {
      GaUtil.init('UA-75576478-1');
    }
  }

  static sendEvent(eventCategory, eventAction, eventLabel, eventValue) {
    console.log('eventCategory', eventCategory, 'eventAction', eventAction, 'eventLabel', eventLabel, 'eventValue', eventValue);
    if (enable) {
      GaUtil.sendEvent(eventCategory, eventAction, eventLabel, eventValue);
    }
  }
}

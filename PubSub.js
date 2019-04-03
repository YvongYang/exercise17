/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-04-04 00:22:37
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    if (!this.subscribers[type]) {
      this.subscribers[type] = [];
    }

    this.subscribers[type].push(fn);
  }

  unsubscribe(type, fn) {
    // for (var subscriber in this.subscribers) {
      var cbs = this.subscribers[type];
      if (cbs && cbs.length > 0) {
        cbs.splice(cbs.findIndex(cb => cb === fn), 1);
      }
    // }
  }

  publish(type, ...args) {
    var cbs = this.subscribers[type];
    var len = cbs ? cbs.length : 0;

    while (len--) {
      cbs[len].apply(this, args);
    }
  }

}

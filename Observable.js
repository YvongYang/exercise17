/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-04-03 23:34:25
 */

class ObserverList {
  constructor() {
    this.observerList = [];
  }
  
  add(observer) {
    return this.observerList.push(observer);
  }
  remove(observer) {
    this.observerList.splice(this.observerList.findIndex(i => i === observer), 1 );
  }
  count() {
    // return observer list size
    return this.observerList.length;
  }

  get(index) {
    if (index > -1 && index < this.observerList.length) {
      return this.observerList[index];
    }
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList();
  }
  addObserver(observer) {
    // todo add observer
    this.observers.add(observer);
  }
  removeObserver(observer) {
    // todo remove observer
    this.observers.remove(observer);
  }
  notify(...args) {
    // todo notify
    const observerCount = this.observers.count();
    for(let i = 0; i < observerCount; i++) {
      this.observers.get(i).update(...args);
    }
  }
}

module.exports = { Subject };
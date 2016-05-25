var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/AppConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _data = ["Apples", "Bananas", "Oranges"]

var TweetStore = assign(EventEmitter.prototype, {
  _addItem: function(item){
    console.log(item);
    _data.push(item);
    console.log(_data);
  },
  getAllTweets: function(){
    return _data;
  },
  emitChange: function(){
    this.emit(CHANGE_EVENT)
  },
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener: function(callback){
    this.removeChangeListener(CHANGE_EVENT, callback)
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  console.log(payload.action);
  switch (action.actionType) {
    case Constants.TWEET_CREATE:
      TweetStore._addItem(action.item);
      break;
  }
  TweetStore.emitChange();
  return true;
});

module.exports = TweetStore;

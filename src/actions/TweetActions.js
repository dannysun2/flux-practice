var AppDispatcher = require('../dispatcher/AppDispatcher');
var TweetConstants = require('../constants/AppConstants');

module.exports = {
  addItem: function(item){
    AppDispatcher.handleViewAction({
      actionType:TweetConstants.TWEET_CREATE,
      item: item
    });
  }
}

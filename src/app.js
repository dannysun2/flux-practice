var React = require('react');
var ReactDOM = require('react-dom');
var Tweets = require('./components/Tweets');
var TweetStore = require('./stores/TweetStore');
var TweetActions = require('./actions/TweetActions');

var App = React.createClass({
  getInitialState: function() {
    return {
      items: TweetStore.getAllTweets()
    };
  },
  componentDidMount: function() {
    TweetStore.addChangeListener(this._handleClick);
  },

  _handleClick: function() {
    TweetActions.addItem("this is an item");
  },

  render: function() {
    return (
      <div>
      <Tweets items={this.state.items} />
        <button onClick={this._handleClick}>Click Me</button>
      </div>
    );
  }

});

cp = document.getElementById('app')
ReactDOM.render(<App/>, cp);

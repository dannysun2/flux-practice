var React = require('react');
var PropTypes = React.PropTypes;

var Form = React.createClass({

  render: function() {
    var list = this.props.items.map(function(item){
      return (<li>{item}</li>);
    });
    return (
      <div>
        <ul>{list}</ul>
      </div>
    );
  }

});

module.exports = Form;

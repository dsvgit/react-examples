import React from 'react';
import ReactDOM from 'react-dom';

//createClass
//createElement
//render

function start() {

  var CommentBox = React.createClass({displayName: 'CommentBox',
    render: function() {
      return (
        React.createElement('div', {className: "commentBox"},
          "Hello, world! I am a CommentBox."
        )
      );
    }
  });

  ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById('content')
  );

}

module.exports = start;
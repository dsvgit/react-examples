import React from 'react';
import ReactDOM from 'react-dom';

function start() {

  var CommentBox = React.createClass({
    render: function() {
      return (
        <div className="commentBox">
          Hello, world! I am a CommentBox.
        </div>
      );
    }
  });
  ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
  );

}

module.exports = start;
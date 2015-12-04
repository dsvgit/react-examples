import React from 'react';
import ReactDOM from 'react-dom';

class CommentBox extends React.Component {
  render() {
    return <div className="commentBox">
      <p>{this.props.post}</p>
      <p><em>Author: {this.props.author}</em></p>
    </div>
  }
}

function start() {

  ReactDOM.render(
    <CommentBox author="John" post="this is my first post"/>,
    document.getElementById('content')
  );

}

module.exports = start;
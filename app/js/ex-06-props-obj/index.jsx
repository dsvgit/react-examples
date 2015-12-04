import React from 'react';
import ReactDOM from 'react-dom';

const comment = {
  post: 'I rendered from object',
  author: 'James',
  postDate: new Date()
};

//Cannot assign to read only property 'comment'

class CommentBox extends React.Component {
  render() {
    return <div className="commentBox">
      <p>{this.props.comment.post}</p>
      <p><em>Author: {this.props.comment.author}</em></p>
      <p><small>posts: {this.props.comment.postDate.toString()}</small></p>
    </div>
  }
}

function start() {

  ReactDOM.render(
    <CommentBox comment={comment} />,
    document.getElementById('content')
  );

}

module.exports = start;
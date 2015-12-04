import React from 'react';

import { CommentBox } from './CommentBox.jsx';

export class Comments extends React.Component {

  render() {
    var comments = this.props.comments.map(function(comment, index) {
      return <CommentBox key={index} comment={comment} />
    });
    return <div>
      {comments}
    </div>
  }
}
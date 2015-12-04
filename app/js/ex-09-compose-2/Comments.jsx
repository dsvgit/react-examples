import React from 'react';

import { CommentBox } from './CommentBox.jsx';
import { CommentCreateForm } from './CommentCreateForm.jsx';

export class Comments extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    };
  }

  handleCreatePost(comment) {
    console.log(comment);
    this.setState({
      comments: [comment, ...this.state.comments]
    });
  }

  render() {
    var comments = this.state.comments.map(function(comment, index) {
      return <CommentBox key={index} comment={comment} />
    });
    return <div>
      <CommentCreateForm onCreatePost={this.handleCreatePost.bind(this)} />
      {comments}
    </div>
  }
}
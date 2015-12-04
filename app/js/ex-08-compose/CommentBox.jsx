import React from 'react';

export class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      like: true
    };
  }

  handleLike() {
    this.setState({
      like: !this.state.like
    });
  }

  render() {
    return <div className="commentBox">
      <p>{this.props.comment.post}</p>
      <p><em>Author: {this.props.comment.author}</em></p>
      <p><small>posts: {this.props.comment.postDate.toString()}</small></p>
      <p className="ex-07-like" onClick={this.handleLike.bind(this)}>{(() => {
        if (this.state.like)
          return 'liked';
        else
          return 'not liked';
      })()}</p>
      <hr />
    </div>
  }
}
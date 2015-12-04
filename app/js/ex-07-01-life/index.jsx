import React from 'react';
import ReactDOM from 'react-dom';

const comment = {
  post: 'I rendered from object',
  author: 'James',
  postDate: new Date()
};

//getDefaultProps
//getInitialState
//componentWillMount
//render
//componentDidMount

class CommentBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      like: true
    };
  }

  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    console.log('did mount');
  }

  componentWillRecieveProps() {
    console.log('wille recieve props');
  }

  shouldComponentUpdate() {
    console.log('should update');
    return true;
  }

  componentWillUpdate() {
    console.log('will update');
  }

  componentDidUpdate() {
    console.log('did update');
  }

  componentWillUnmount() {
    console.log('will unmount');
  }

  handleLike() {
    this.setState({
      like: !this.state.like
    });
  }

  render() {
    console.log('render');
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
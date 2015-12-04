import React from 'react';

export class CommentCreateForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      author: '',
      post: ''
    };
  }

  handleChange(field, e) {
    var nextState = {}
    nextState[field] = e.target.value;
    this.setState(nextState);
    console.log(this.state);
  }

  handleCreate() {
    this.props.onCreatePost(Object.assign({}, this.state, {postDate: new Date()}));
  }

  render() {
    return <div>
      <form>
        <p><b>Create user</b></p>
        <p><input type="text" placeholder="author" onChange={this.handleChange.bind(this, 'author')}/></p>
        <p><textarea type="text" placeholder="post" onChange={this.handleChange.bind(this, 'post')}/></p>
        <p><input type='button' value='Create post' onClick={this.handleCreate.bind(this)}/></p>
        <hr/>
      </form>
    </div>
  }
}
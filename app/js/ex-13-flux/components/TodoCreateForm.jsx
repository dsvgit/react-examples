import React from 'react';

export class TodoCreateForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  handleChange(field, e) {
    var nextState = {}
    nextState[field] = e.target.value;
    this.setState(nextState);
    console.log(this.state);
  }

  handleCreate() {

  }

  render() {
    return <div>
      <form>
        <p><b>Todo</b></p>
        <p><input type="text" placeholder="author" onChange={this.handleChange.bind(this, 'text')}/></p>
        <p><input type='button' value='Create post' onClick={this.handleCreate.bind(this)}/></p>
        <hr/>
      </form>
    </div>
  }
}
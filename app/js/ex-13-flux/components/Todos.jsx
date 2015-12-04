import React from 'react';

import { connect } from 'react-redux';

import { store } from '../store/index.jsx';

import { Todo } from './Todo.jsx';
import { TodoCreateForm } from './TodoCreateForm.jsx';

import { addTodo } from '../actions/index.jsx';

var TodoStore = require('../store.js');

function getState() {
  return {
    text: TodoStore.getTodos()
  };
}

class Todos extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: this.props.todos
    };
  }

  handleCreateTodo(todo) {
    this.setState({
      todos: store.getState().todos
    });
    //this.setState();
  }

  render() {
    var ts = this.state.todos.map(function(todo, index) {
      return <Todo key={index}>{todo.text}</Todo>
    });
    return <div>
      <TodoCreateForm />
      {ts}
    </div>
  }
}

function selectTodos(state) {
  return {
    todos: state.todos
  };
}

export default connect(selectTodos)(Todos);
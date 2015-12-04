import React from 'react';

import { connect } from 'react-redux';

import { store } from '../store/index.jsx';

import { Todo } from './Todo.jsx';
import { TodoCreateForm } from './TodoCreateForm.jsx';

import { addTodo } from '../actions/index.jsx';

class Todos extends React.Component {

  constructor(props) {
    super(props);

    let unsubscribe = store.subscribe(() => {
        this.setState({
          todos: store.getState().todos
        });
      }
    );

    this.state = {
      todos: this.props.todos
    };
  }

  handleCreateTodo(todo) {
    console.log(todo);
    console.log(this.props.dispatch(addTodo(todo.text)));
    console.log(store.getState().todos);
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
      <TodoCreateForm onCreateTodo={this.handleCreateTodo.bind(this)} />
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
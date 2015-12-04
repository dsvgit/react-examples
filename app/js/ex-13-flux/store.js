'use strict';

var createStore = require('./createStore.jsx');

var _todos = [];
var TodoStore = createStore('TodoStore', {
    getTodos: function () {
        return _todos;
    },
    handlers: {
        'ADD_TODO': 'addTodo'
    },
    addTodo: function (state) {
        _todos.push(state.data.text);
        this.__emitChange();
    }
});

module.exports = TodoStore;
'use strict';

module.exports = {
  addTodo: function (data) {
    AppDispatcher.dispatch({
      type: 'ADD_TODO',
      data: {
        text: data.text
      }
    })
  }
}
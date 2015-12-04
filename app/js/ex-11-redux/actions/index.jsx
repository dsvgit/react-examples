/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index };
}

//-----------------------------------------------------
var storeEx = {
  todos: [
    {
      completed: true,
      text: 'Go to shop'
    },
    {
      completed: false,
      text: 'Buy milk'
    }
  ]
}
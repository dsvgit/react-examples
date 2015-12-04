import { createStore } from 'redux';
import todoApp from '../reducers/index.jsx';

export const store = createStore(todoApp);

import { addTodo, completeTodo } from '../actions/index.jsx';

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

// Stop listening to state updates
unsubscribe();


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
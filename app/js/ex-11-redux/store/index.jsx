import { createStore } from 'redux';
import todoApp from '../reducers/index.jsx';

let store = createStore(todoApp);

import { addTodo, completeTodo } from '../actions/index.jsx';

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(completeTodo(0));
store.dispatch(completeTodo(1));

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
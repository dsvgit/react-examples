import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // v3.1.0

import { store } from './store/index.jsx';

import Todos from './components/Todos.jsx';

function start() {
  ReactDOM.render(
    <Provider store={store}>
      <Todos />
    </Provider>,
    document.getElementById('content')
  );
}

module.exports = start;
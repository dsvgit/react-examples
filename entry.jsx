'use strict';
require('app/css/site.css');

window.ex01 = require('app/js/ex-01-render-component/index.jsx');
window.ex02 = require('app/js/ex-02-render-component-jsx/index.jsx');
window.ex03 = require('app/js/ex-03-render-component-es6/index.jsx');
window.ex04 = require('app/js/ex-04-props/index.jsx');
window.ex05 = require('app/js/ex-05-props-types/index.jsx');
window.ex06 = require('app/js/ex-06-props-obj/index.jsx');
window.ex07 = require('app/js/ex-07-state/index.jsx');
window.ex0701 = require('app/js/ex-07-01-life/index.jsx');
window.ex08 = require('app/js/ex-08-compose/index.jsx');
window.ex09 = require('app/js/ex-09-compose-2/index.jsx');
window.ex10 = require('app/js/ex-10-router/index.jsx');
window.ex11 = require('app/js/ex-11-redux/start.jsx');
window.ex12 = require('app/js/ex-12-redux-react/start.jsx');
window.ex13 = require('app/js/ex-13-flux/start.jsx');

import { store } from './app/js/ex-12-redux-react/store/index.jsx';
import { addTodo } from './app/js/ex-12-redux-react/actions/index.jsx';


window.addNewTodo = function() {
  var a = require('./app/js/ex-12-redux-react/store/index.jsx');
  store.dispatch(addTodo('dsadsafafds'));
};
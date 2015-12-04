import React from 'react';
import ReactDOM from 'react-dom';

import { Comments } from './Comments.jsx';

const comments = [
  {
    post: 'I rendered from object',
    author: 'James',
    postDate: new Date()
  },
  {
    post: 'This is views composition',
    author: 'Alex',
    postDate: new Date()
  },
  {
    post: 'I rendered by react',
    author: 'Bob',
    postDate: new Date()
  },
  {
    post: 'Hello there!)',
    author: 'Ann',
    postDate: new Date()
  }
];

function start() {

  ReactDOM.render(
    <div>
      <Comments comments={comments} />
    </div>,
    document.getElementById('content')
  );

}

module.exports = start;
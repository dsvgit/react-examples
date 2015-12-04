import React from 'react';

export class Todo extends React.Component {
  render() {
    return <div>
      <p>{this.props.children}</p>
      <hr />
    </div>
  }
}
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import { createHistory, useBasename } from 'history'

const ACTIVE = { color: 'green' }

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Routing</h1>
        <ul>
          <li><IndexLink to="/" activeStyle={ACTIVE}>Index</IndexLink></li>
          <li><Link to="/users" activeStyle={ACTIVE}>Users</Link></li>
          <li><Link to="/about" activeStyle={ACTIVE}>About</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

class Index extends React.Component {
  render() {
    return (
      <div>
        <h2>Index</h2>
      </div>
    )
  }
}

class Users extends React.Component {
  render() {
    return (
      <div>
        <h2>Users</h2>
      </div>
    )
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    )
  }
}

const history = useBasename(createHistory)({
  basename: '/app'
})

function start() {
  render((
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="/about" component={About}/>
        <Route path="/users" component={Users} />
      </Route>
    </Router>
  ), document.getElementById('content'))
}

module.exports = start;
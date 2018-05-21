/* global localStorage */
import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import AppShell from './AppShell'
import Main from './Main'
import Settings from './Settings'
import Reset from './Reset'
import '../App.css'

class App extends Component {
  componentWillMount () {
    const storedValue = localStorage.getItem('storedValue')
    this.setState({ current: storedValue })
  }

  render () {
    return (
      <Router>
        <AppShell>
          <div>
            <Route
              exact
              path='/'
              render={props => <Main {...props} current={this.state} />}
            />
            <Route
              exact
              path='/settings'
              render={props => <Settings {...props} />}
            />
            <Route exact path='/reset' render={props => <Reset {...props} />} />
          </div>
        </AppShell>
      </Router>
    )
  }
}

export default App

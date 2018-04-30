import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import AppShell from './AppShell'
import Main from './Main'
import Settings from './Settings'
import '../App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <AppShell>
          <div>
            <Route exact path='/' component={Main} />
            <Route exact path='/settings' component={Settings} />
          </div>
        </AppShell>
      </Router>
    )
  }
}

export default App

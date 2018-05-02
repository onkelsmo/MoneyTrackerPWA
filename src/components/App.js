import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import AppShell from './AppShell'
import Main from './Main'
import Settings from './Settings'
import '../App.css'

class App extends Component {
  componentDidMount () {
    this.setState({current: 0})
  }

  render () {
    return (
      <Router>
        <AppShell>
          <div>
            <Route exact path='/' render={props => <Main {...props} current={this.state} />} />
            <Route exact path='/settings' render={props => <Settings {...props} />} />
          </div>
        </AppShell>
      </Router>
    )
  }
}

export default App

import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import AppShell from './AppShell'
import Main from './Main'
import Settings from './Settings'
import '../App.css'

class App extends Component {
  state = {
    current: 0,
    openReset: false,
    handleResetOpen: () => {
      this.setState({
        openReset: true
      })
    },
    handleResetClose: () => {
      this.setState({
        openReset: false
      })
    },
    handleResetOk: () => {
      localStorage.setItem('currentValue', 0)
      this.setState({
        openReset: false,
        current: 0
      })
    }
  }

  componentWillMount () {
    const currentValue = localStorage.getItem('currentValue')
    if (currentValue !== null) {
      this.setState({ current: currentValue })
    }
  }

  render () {
    return (
      <Router>
        <AppShell data={this.state}>
          <div>
            <Route
              exact
              path='/'
              render={props => <Main {...props} data={this.state} />}
            />
            <Route
              exact
              path='/settings'
              render={props => <Settings {...props} data={this.state} />}
            />
          </div>
        </AppShell>
      </Router>
    )
  }
}

export default App

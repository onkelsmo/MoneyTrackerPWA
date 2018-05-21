import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import AppShell from './AppShell'
import Main from './Main'
import Settings from './Settings'
import '../App.css'

class App extends Component {
  state = {
    current: 0,
    open: false,
    handleResetClick: () => {
      this.setState({
        open: true
      })
    },
    handleClose: () => {
      this.setState({
        open: false
      })
    },
    handleOk: () => {
      localStorage.setItem('storedValue', 0)
      this.setState({
        open: false,
        current: 0
      })
    }
  }

  componentWillMount () {
    const storedValue = localStorage.getItem('storedValue')
    this.setState({ current: storedValue })
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

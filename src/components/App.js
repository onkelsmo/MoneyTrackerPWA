import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import AppShell from './AppShell'
import Main from './Main'
import Settings from './Settings'
import '../App.css'

class App extends Component {
  state = {
    current: 1000,
    limit: 1000,
    rest: 0,
    desc: true,
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
      localStorage.setItem('currentValue', this.state.limit)
      this.setState({
        openReset: false,
        current: this.state.limit
      })
    }
  }

  componentWillMount () {
    const currentValue = localStorage.getItem('currentValue')
    if (currentValue !== null) {
      this.setState({ current: currentValue })
    } else {
      localStorage.setItem('currentValue', this.state.current)
    }

    const descValue = localStorage.getItem('desc')
    if (descValue !== null) {
      this.setState({ desc: descValue })
    } else {
      localStorage.setItem('desc', this.state.desc)
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

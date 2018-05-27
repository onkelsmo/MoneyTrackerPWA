import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { CURRENT_VALUE, DESC, LIMIT, MAIN_TITLE } from '../constants'
import AppShell from './AppShell'
import Main from './Main'
import Settings from './Settings'
import '../App.css'

class App extends Component {
  state = {
    title: MAIN_TITLE,
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
      localStorage.setItem(CURRENT_VALUE, this.state.limit)
      this.setState({
        openReset: false,
        current: this.state.limit
      })
    }
  }

  componentWillMount () {
    const currentValue = localStorage.getItem(CURRENT_VALUE)
    if (currentValue !== null) {
      this.setState({ current: currentValue })
    } else {
      localStorage.setItem(CURRENT_VALUE, this.state.current)
    }

    const descValue = localStorage.getItem(DESC)
    if (descValue !== null) {
      this.setState({ desc: descValue })
    } else {
      localStorage.setItem(DESC, this.state.desc)
    }

    const limitValue = localStorage.getItem(LIMIT)
    if (limitValue !== null) {
      this.setState({ limit: limitValue })
    } else {
      localStorage.setItem(LIMIT, this.state.limit)
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

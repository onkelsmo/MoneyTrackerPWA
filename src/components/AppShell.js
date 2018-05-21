import React from 'react'
import AppBar from 'material-ui/AppBar'
import Menu from './Menu'
import Back from './Back'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

class AppShell extends React.Component {
  state = {
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
        open: true
      })
    }
  }

  render () {
    const actions = [
      <FlatButton label='Cancel' primary onClick={this.state.handleClose} />,
      <FlatButton label='OK' primary onClick={this.state.handleClose} />
    ]

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title='Money Tracker'
            iconElementLeft={<Back />}
            iconElementRight={<Menu data={this.state} />}
          />
          <div id='content'>
            {React.cloneElement(this.props.children)}
          </div>
          <Dialog title='Reset' actions={actions} modal open={this.state.open}>
            Reset the counter?
          </Dialog>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default AppShell

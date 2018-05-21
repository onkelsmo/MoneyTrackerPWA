import React from 'react'
import AppBar from 'material-ui/AppBar'
import Menu from './Menu'
import Back from './Back'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

class AppShell extends React.Component {
  render () {
    const actions = [
      <FlatButton
        label='Cancel'
        primary
        onClick={this.props.data.handleClose}
      />,
      <FlatButton label='OK' primary onClick={this.props.data.handleOk} />
    ]

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title='Money Tracker'
            iconElementLeft={<Back />}
            iconElementRight={<Menu data={this.props.data} />}
          />
          <div id='content'>
            {React.cloneElement(this.props.children)}
          </div>
          <Dialog
            title='Reset'
            actions={actions}
            modal
            open={this.props.data.open}
          >
            Reset the counter?
          </Dialog>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default AppShell

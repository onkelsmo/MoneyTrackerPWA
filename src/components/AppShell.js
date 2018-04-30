import React from 'react'
import AppBar from 'material-ui/AppBar'
import Menu from './Menu'
import Back from './Back'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class AppShell extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title='Money Tracker'
            iconElementLeft={<Back />}
            iconElementRight={<Menu />}
          />
          <div id='content'>
            {React.cloneElement(this.props.children)}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default AppShell

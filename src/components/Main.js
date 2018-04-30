import React from 'react'
import AppBar from 'material-ui/AppBar'
import Menu from './Menu'

class Main extends React.Component {
  render () {
    return (
      <AppBar
        title='Money Tracker'
        showMenuIconButton={false}
        iconElementRight={<Menu />}
      />
    )
  }
}

export default Main

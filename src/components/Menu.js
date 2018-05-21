import React from 'react'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
  state = {
    open: false
  }

  handleResetClick () {}

  render () {
    const actions = [
      <FlatButton label='Cancel' primary onClick={this.handleClose} />,
      <FlatButton label='OK' primary onClick={this.handleClose} />
    ]

    return (
      <IconMenu
        {...this.props}
        iconButtonElement={
          <IconButton>
            <MoreVertIcon className='MenuIcon' />
          </IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem
          primaryText='Setting'
          containerElement={<Link to='/settings' />}
        />
        <MenuItem primaryText='Reset' onClick={this.handleResetClick} />
        <Dialog title='Reset' actions={actions} modal open={this.state.open}>
          Reset the counter?
        </Dialog>
      </IconMenu>
    )
  }
}

export default Menu

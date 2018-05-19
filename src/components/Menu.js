import React from 'react'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
  render () {
    return (
      <IconMenu
        {...this.props}
        iconButtonElement={<IconButton>
                             <MoreVertIcon className='MenuIcon' />
                           </IconButton>}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
        <MenuItem primaryText='Setting' containerElement={<Link to='/settings' />} />
        <MenuItem primaryText='Reset' containerElement={<Link to='/reset' />} />
      </IconMenu>
    )
  }
}

export default Menu

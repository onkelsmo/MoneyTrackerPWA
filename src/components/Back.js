import React from 'react'
import IconButton from 'material-ui/IconButton'
import BackButton from 'material-ui/svg-icons/action/home'
import { Link } from 'react-router-dom'

class Back extends React.Component {
  render () {
    return (
      <IconButton
        containerElement={<Link to='/' />}
      >
        <BackButton
          className='BackButton'
        />
      </IconButton>
    )
  }
}

export default Back

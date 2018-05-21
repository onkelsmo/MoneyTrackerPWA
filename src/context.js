import React from 'react'

const state = {
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
  }
}

const AppContext = React.createContext(state)

export default AppContext

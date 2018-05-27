import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import FabIcon from '@material-ui/icons/AttachMoney'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from '@material-ui/core/TextField'

class Main extends React.Component {
  // TODO: Move state to some sort of stateProvider
  state = {
    open: false,
    money: 0
  }

  handleOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  handleRaiseClick = () => {
    let newCurrentValue =
      parseInt(this.props.data.current, 10) + parseInt(this.state.money, 10)

    localStorage.setItem('currentValue', newCurrentValue)
    this.setState({ open: false })
    this.props.data.current = newCurrentValue
  }

  handleChange = event => {
    this.setState({
      money: event.target.value
    })
  }

  render () {
    const actions = [
      <FlatButton label='OK' primary onClick={this.handleRaiseClick} />
    ]

    let { current } = this.props.data
    return (
      <div>
        <h1>MAIN</h1>
        <p>
          {current}
        </p>
        <FloatingActionButton
          className='floating_action_button'
          onClick={this.handleOpen}
        >
          <FabIcon />
        </FloatingActionButton>
        <Dialog
          title='Spend money'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            id='number'
            label='Number'
            onChange={this.handleChange}
            type='number'
            className='money_input'
            InputLabelProps={{
              shrink: true
            }}
            margin='normal'
          />
        </Dialog>
      </div>
    )
  }
}

export default Main

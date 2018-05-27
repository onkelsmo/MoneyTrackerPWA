import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import FabIcon from '@material-ui/icons/AttachMoney'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from '@material-ui/core/TextField'

class Main extends React.Component {
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

  calculate = (value1, value2) => {
    if (this.props.data.desc) {
      return parseInt(value1, 10) - parseInt(value2, 10)
    } else {
      return parseInt(value1, 10) + parseInt(value2, 10)
    }
  }

  handleRaiseClick = () => {
    let newCurrentValue = this.calculate(
      this.props.data.current,
      this.state.money
    )

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

    let { current, limit } = this.props.data
    return (
      <div className='content'>
        <table>
          <tbody>
            <tr className='current'>
              <td>Current:</td>
              <td className='value'>{current}</td>
            </tr>
            <tr className='limit'>
              <td>Limit:</td>
              <td className='value'>{limit}</td>
            </tr>
          </tbody>
        </table>
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

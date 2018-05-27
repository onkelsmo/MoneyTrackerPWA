import React from 'react'
import { DESC, LIMIT } from '../constants'
import Switch from '@material-ui/core/Switch'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from '@material-ui/core/TextField'

class Settings extends React.Component {
  state = {
    desc: this.props.data.desc,
    open: false,
    limit: this.props.data.limit
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

  handleSwitchChange = () => {
    if (this.props.data.desc) {
      this.props.data.desc = false
    } else {
      this.props.data.desc = true
    }
    localStorage.setItem(DESC, this.props.data.desc)
    this.setState({ desc: this.props.data.desc })
  }

  handleSetLimitClick = () => {
    const newLimit = this.state.limit

    localStorage.setItem(LIMIT, newLimit)
    this.setState({ open: false })
    this.props.data.limit = newLimit

    if (this.props.data.current >= newLimit) {
      this.props.data.handleResetOk()
    }
  }

  handleLimitChange = event => {
    this.setState({
      limit: event.target.value
    })
  }

  render () {
    let { limit } = this.props.data
    const actions = [
      <FlatButton label='OK' primary onClick={this.handleSetLimitClick} />
    ]

    return (
      <div className='content'>
        <h1>SETTINGS</h1>
        <table>
          <tbody>
            <tr>
              <td>Current limit: </td>
              <td className='value' onClick={this.handleOpen}>{limit}</td>
            </tr>
            <tr>
              <td>Asc / Desc</td>
              <td className='value'>
                <Switch
                  checked={this.props.data.desc}
                  onChange={this.handleSwitchChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Dialog
          title='Set Limit'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            id='number'
            label='Number'
            onChange={this.handleLimitChange}
            type='number'
            value={this.state.limit}
            className='limit_input'
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

export default Settings

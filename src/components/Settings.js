import React from 'react'
import Switch from '@material-ui/core/Switch'

class Settings extends React.Component {
  state = {
    desc: this.props.data.desc
  }
  handleChange = () => {
    if (this.props.data.desc) {
      this.props.data.desc = false
    } else {
      this.props.data.desc = true
    }
    localStorage.setItem('desc', this.props.data.desc)
    this.setState({ desc: this.props.data.desc })
  }

  render () {
    let { limit } = this.props.data

    return (
      <div className='content'>
        <h1>SETTINGS</h1>
        <table>
          <tbody>
            <tr>
              <td>Current limit: </td>
              <td className='value'>{limit}</td>
            </tr>
            <tr>
              <td>Asc / Desc</td>
              <td className='value'>
                <Switch
                  checked={this.props.data.desc}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Settings

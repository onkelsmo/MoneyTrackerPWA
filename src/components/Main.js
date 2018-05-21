import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import FabIcon from '@material-ui/icons/AttachMoney'

class Main extends React.Component {
  handleRaiseClick () {
    // TODO: open dialog where to input a value!
    let newCurrentValue = ++this.props.data.current
    localStorage.setItem('storedValue', newCurrentValue)
    this.setState({ current: newCurrentValue })
  }

  render () {
    let { current } = this.props.data
    return (
      <div>
        <h1>MAIN</h1>
        <p>
          {current}
        </p>
        <FloatingActionButton
          className='floating_action_button'
          onClick={this.handleRaiseClick.bind(this)}
        >
          <FabIcon />
        </FloatingActionButton>
      </div>
    )
  }
}

export default Main

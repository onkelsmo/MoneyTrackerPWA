import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

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
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}

export default Main

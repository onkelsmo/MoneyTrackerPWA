/* global localStorage */
import React from 'react'

class Main extends React.Component {
  handleRaiseClick () {
    let newCurrentValue = ++this.props.current.current
    localStorage.setItem('storedValue', newCurrentValue)
    this.setState({ current: newCurrentValue })
  }

  render () {
    let { current } = this.props.current

    if (current === null) {
      current = 0
    }

    return (
      <div>
        <h1>MAIN</h1>
        <p>
          {current}
          <br />
          <button type='button' onClick={this.handleRaiseClick.bind(this)}>
            Raise
          </button>
        </p>
      </div>
    )
  }
}

export default Main

import React from 'react'

class Main extends React.Component {
  handleRaiseClick () {
    let newCurrentValue = this.props.current.current++
    this.setState({current: newCurrentValue})
  }

  render () {
    let current = ''
    if (this.props.current !== null) {
      current = this.props.current.current
    }

    return (
      <div>
        <h1>MAIN</h1>
        <p>
          {current}
          &nbsp;
          <button type='button' onClick={this.handleRaiseClick.bind(this)}>Raise</button>
        </p>
      </div>
    )
  }
}

export default Main

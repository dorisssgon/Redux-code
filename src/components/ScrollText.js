import React from 'react'

class ScrollText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fontSize: 15
    }
  }

  handleOnWheel = (e)=> {
    if (e.deltaY < 0 && this.state.fontSize >= 10) {
      this.setState(prevState => ({
        ...this.prevState,
        fontSize: prevState.fontSize - 1
      }))
    } else {
      this.setState(prevState => ({
        ...this.prevState,
        fontSize: prevState.fontSize + 1
      }))
    }
  }

  render() {
    return (
      <p
        className="show-number"
        style={{fontSize: this.state.fontSize}}
        onWheel={this.handleOnWheel}>
        Scroll to change font size.
      </p>
    )
  }
}

export default ScrollText
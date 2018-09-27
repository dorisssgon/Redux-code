import React, { Component } from 'react';
import './App.css';

import modal from './HOC/modal'
import ShowNumber from './components/ShowNumber'
import ScrollText from './components/ScrollText'
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      open: false,
    }
  }

  onClose = () => {
    this.setState({
      ...this.state,
      open: false
    })
  }

  onOpen = () => {
    this.setState((prevState) => ({
      ...this.state,
      count: prevState.count+1,
      open: true
    }))
  }

  onReset = ()=> {
    this.setState({
      ...this.state,
      count: 0
    })
  }


  render() {
    const NumberWithModal = modal(ShowNumber)
    return (
      <div className="App">
        <div className="content">
          <button onClick={this.onOpen}>Open Modal</button>
          <button onClick={this.onReset}>Reset Count</button>
        </div>
        <NumberWithModal count={this.state.count} onClose={this.onClose} open={this.state.open}/>
        <ScrollText />
        <List />
      </div>
    );
  }
}

export default App;

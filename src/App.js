import React, { Component } from 'react';
import logo from './logo.svg';
import Counter from './Counter/Counter'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FirstComponent/>
        <Counter/>
    </div>
    );
  }
}

class FirstComponent extends Component{
  render (){
    return(
      <div>
        First Component
      </div>
    )
  }
}
export default App;

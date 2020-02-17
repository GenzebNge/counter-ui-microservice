import React, { Component } from 'react';
import Counter from './Counter/Counter'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
        <Counter/>
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

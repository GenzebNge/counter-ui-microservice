import React, { Component } from 'react'
import './Counter.css';

class Counter extends Component {
    render(){
        return(
            <div className="counter">
              <CounterButton/>
            </div>
        )
    }
}

export class CounterButton extends Component{
    render(){
        return (
            <div>
                <button className="button">+1</button>
                <span className="count">0</span>
            </div>
        )
    }
}
export default Counter
import React, { Component } from 'react'
import './Counter.css';

class Counter extends Component {
    render() {
        return (
            <div className="counter">
                <CounterButton />
            </div>
        )
    }
}

export class CounterButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }

        this.increament = this.increament.bind(this)
    }

    render() {
        return (
            <div>
                <button className="button" onClick={this.increament}>+1</button>
                <span className="count">{this.state.counter}</span>
            </div>
        )
    }


    increament() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
}

export default Counter
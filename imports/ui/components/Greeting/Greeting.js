import React, { Component } from 'react'
import './Greeting.css'

export default class Greeting extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <h1>This is the Greeting</h1> 
            </div>
        )
    }
}
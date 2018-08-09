import React, { Component } from 'react'
import './Greeting.css'

export default class Greeting extends Component {
    render() {
        let stars = [];
        for (let i = 0; i < 80; i++) {
            let square = (Math.random() * 0.9);
            if (Math.floor(Math.random() * 100) < 20) {
                stars.push(<div key={"star" + i} style={{ top: Math.floor(Math.random() * 70) + "vh", left: Math.floor(Math.random() * 100) + "vw", width: square + "vmin", height: square + "vmin", animation: "an-opacity " + 3 + "s linear " + (Math.random() * 10.9) + "s infinite alternate " }} className={"star"} />)
            } else {
                stars.push(<div key={"star" + i} style={{ top: Math.floor(Math.random() * 70) + "vh", left: Math.floor(Math.random() * 100) + "vw", width: square + "vmin", height: square + "vmin", animation: "an-fallStar " + 0.5 + "s linear " + (Math.random() * 1800) + "s normal", }} className={"star"} />)
            }
        }
        for (let i = 0; i < 500; i++) {
            let square = (Math.random() * (Math.random() * 0.5));

            stars.push(<div key={"star" + i + 80} style={{ top: Math.floor(Math.random() * 100) + "vh", left: Math.floor(Math.random() * 100) + "vw", width: square + "vmin", height: square + "vmin", animation: "an-opacity " + Math.floor(Math.random() * 4) + "s linear " + (Math.random() * 10.9) + "s infinite alternate " }} className={"star"} />)
        }
        return (
            <div className={this.props.className}>
                <div className="mtn-l" />
                <div className="mtn-l-flat" />
                <div className="mtn-r" />
                <div className="mtn-r-flat" />
                <div className="mtn-l-flat1" />
                <div className="mtn-r-flat1" />
                <div className="mtn-l-flat5" />
                <div className="mtn-r-flat5" />
                <div className="mtn-square" />
                <div className="moon" />
                {stars}
            </div>
        )
    }
}
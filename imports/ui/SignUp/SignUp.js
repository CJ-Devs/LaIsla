import React, { Component } from 'react'
import './SignUp.css'

export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert()
    }

    render() {
        let stars = [];
        for (let i = 0; i < 180; i++) {
            let square = (Math.random() * 0.9);
            if (Math.floor(Math.random() * 100) < 10) {
                stars.push(<div key={"star" + i} style={{ top: Math.floor(Math.random() * 100) + "vh", left: Math.floor(Math.random() * 100) + "vw", width: square + "vmin", height: square + "vmin", animation: "an-opacity " + 3 + "s linear " + (Math.random() * 10.9) + "s infinite alternate " }} className={"star"} />)
            } else {
                stars.push(<div key={"star" + i} style={{ top: Math.floor(Math.random() * 100) + "vh", left: Math.floor(Math.random() * 100) + "vw", width: square + "vmin", height: square + "vmin", animation: "an-fallStar " + 0.5 + "s linear " + (Math.random() * 1200) + "s normal", }} className={"star"} />)
            }
        }
        for (let i = 0; i < 500; i++) {
            let square = (Math.random() * (Math.random() * 0.5));

            stars.push(<div key={"star" + i + 80} style={{ top: Math.floor(Math.random() * 100) + "vh", left: Math.floor(Math.random() * 100) + "vw", width: square + "vmin", height: square + "vmin", animation: "an-opacity " + Math.floor(Math.random() * 4) + "s linear " + (Math.random() * 10.9) + "s infinite alternate " }} className={"star"} />)
        }
        return (
            <div className="SignUp">
                <p className="Open-signup-modal">Presiona la luna.</p>

                <div className="modal-content modal-signup">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Modal Header</h4>
                    </div>
                    <div className="modal-body">
                        <p>Some text in the modal.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>

                <div className="moon" onClick={this.handleClick} style={{ top: 40 + "vh", left: 25 + "vw", height: 40 + "vmin", width: 40 + "vmin", animation: "an-opacity-moon " + 3 + "s linear " + 0.1 + "s infinite alternate " }} />
                {stars}
            </div>
        )
    }
}
/*
                <form action="/action_page.php">
                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" id="email" />
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" />
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" /> Remember me</label>
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
                */
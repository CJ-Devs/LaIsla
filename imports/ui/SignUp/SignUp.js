import React, { Component } from 'react'
import './SignUp.css'

export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            male: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSex = this.handleSex.bind(this);
    }

    handleClick() {
        this.setState((e) => ({
            modal: !e.modal
        }))
    }

    handleSex() {
        this.setState((e) => ({
            male: !e.male
        }))
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
                {this.state.modal ?
                    <div className="modal-content modal-signup">
                        <div className="modal-header">
                            <h4 className="modal-title" style={{ left: 0 }}>Registrarse</h4>
                            <button type="button" className="btn btn-danger" onClick={this.handleClick} style={{ right: 0 }}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <form >

                                <div className="form-group">
                                    <label>Nombre:</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>

                                <div className="form-group">
                                    <label>Apellido:</label>
                                    <input type="text" className="form-control" id="lastName" />
                                </div>

                                <div className="form-group">
                                    <label >Contraseña:</label>
                                    <input type="password" className="form-control" id="pwd" />
                                </div>
                                <div className="form-group">
                                    {
                                        this.state.male ?
                                            <button type="button" onClick={this.handleSex} className="btn btn-default" style={{ backgroundColor: "Blue", color: "White" }}>Niño</button>
                                            :
                                            <button type="button" onClick={this.handleSex} className="btn btn-default" style={{ backgroundColor: "rgb(233, 73, 100)", color: "White" }}>Niña</button>
                                    }
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    :
                    <div className="fullscreen">
                        <p className="Open-signup-modal">Presiona la luna.</p>
                        <div className="moon" onClick={this.handleClick} style={{ top: 40 + "vh", left: 25 + "vw", height: 40 + "vmin", width: 40 + "vmin", animation: "an-opacity-moon " + 3 + "s linear " + 0.1 + "s infinite alternate " }} />
                    </div>
                }
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
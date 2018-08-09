import React, { Component } from 'react'
import './Navbar.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee)

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.handleHome = this.handleHome.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleHome() {
        window.location = '/'
    }

    handleSignUp() {
        window.location = '/Signup'
    }

    render() {
        return (
            <div className={this.props.className + " grid-container"}>
                <p className="nav-title" onClick={this.handleHome}>La Isla</p>
                {this.props.currentUser ?
                    <p className="nav-item">USER</p>
                    :
                    <p className="nav-item i3" onClick={this.handleSignUp}>Registrarse</p>
                }
            </div>
        )
    }
}

/*
                <FontAwesomeIcon icon="coffee" />
                <div className="grid-item">2</div>
                <div className="grid-item">3</div>
*/
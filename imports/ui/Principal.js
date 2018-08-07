import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Navbar from './components/Navbar/Navbar'
import Greeting from './components/Greeting/Greeting'

class Principal extends Component {

    constructor(props) {
        super(props)

        this.state = {
        };
    }

    render() {
        return (
            <div className="Principal">
                <Navbar className="Principal-navbar"/>
                <Greeting className="Greeting"/>
                
            </div>
        )
    }
}

export default withTracker(() => {
    Meteor.subscribe('accounts');
    return {
        //tasks: Tasks.find({}, { sort: { cameAt: -1 } }).fetch(),
        currentUser: Meteor.user(),
    };
})(Principal);
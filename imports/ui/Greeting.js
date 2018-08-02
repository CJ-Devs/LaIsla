import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

class Greeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hideCompleted: false,
        };
    }

    render() {
        return (
            <h1>Hey there!</h1>
        )
    }
}

export default withTracker(() => {
    Meteor.subscribe('accounts');
    return {
        //tasks: Tasks.find({}, { sort: { cameAt: -1 } }).fetch(),
        currentUser: Meteor.user(),
    };
})(Greeting);
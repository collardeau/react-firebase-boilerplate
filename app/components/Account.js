const React = require('react');
let authUtils = require('../utils/authUtils');

let user = authUtils.isLoggedIn();

class Account extends React.Component {

    constructor(){
        super();
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e){
        console.log("handling logout");
        e.preventDefault();
        authUtils.logout();
    }

    render() {
        return (
            <div className="container">
                <h1>Account</h1>
                <p>You signed up with email: </p>
                <button onClick={this.handleLogout} className="btn-alert">Log Out</button>
            </div>
        )
    }
}

module.exports = Account;
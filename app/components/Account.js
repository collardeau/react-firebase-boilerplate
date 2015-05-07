const React = require('react');
let authUtils = require('../utils/authUtils');
let MyList = require('../components/list/MyList');

let user = authUtils.isLoggedIn();

class Account extends React.Component {

    handleLogout(e){
        authUtils.logout();
        e.preventDefault();
    }

    render() {

        let loggedIn = authUtils.isLoggedIn();
        let userEmail = loggedIn && loggedIn.password.email;

        return (
            <div className="container">
                <h1>Account</h1>
                <p>You signed up with email: <b>{ userEmail }</b> </p>
                <button onClick={this.handleLogout.bind(this)} className="btn-alert">Log Out</button>
                <hr />
                <MyList />
            </div>
        )
    }
}

module.exports = Account;
require('normalize.css/normalize.css');
require('./styles/main.scss');

const React = require('react');
//const hasher = require('hasher');
const firebaseUtils = require('./utils/firebaseUtils');
const authUtils = require('./utils/authUtils');

let Navigation = require('./components/Navigation');
let Home = require('./components/Home');
let ListContainer = require('./components/list/ListContainer');
let Login = require('./components/login/Login');
let Account = require('./components/Account');

class App extends React.Component {

    render() {

        let ui = null;
        let loggedIn = authUtils.isLoggedIn();
        //let publicPages = ['home'];

        if(!loggedIn) {

            ui = <LoginRoute />;

        }else {

            switch(this.props.route) {

                case "home":
                    ui = <HomeRoute />;
                    break;

                case "list":
                    ui = <ListRoute />;
                    break;

                case "login":
                    ui = <LoginRoute />;
                    break;

                case "account":
                    ui = <AccountRoute />;
                    break;

                default:
                    ui = <HomeRoute />;
            }
        }

        return ui ;

    }
}

class HomeRoute extends React.Component {

    render() {
        return (
            <div>
                <Navigation />
                <Home />
            </div>
        )
    }
}

class ListRoute extends React.Component {

    render() {
        return (
            <div>
                <Navigation />
                <ListContainer />
            </div>
        )
    }
}

class LoginRoute extends React.Component {

    render() {
        return (
            <div>
                <Navigation />
                <Login />
            </div>
        )
    }
}

class AccountRoute extends React.Component {

    render() {
        return (
            <div>
                <Navigation />
                <Account />
            </div>
        )
    }
}

module.exports = App;

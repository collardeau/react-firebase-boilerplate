require('normalize.css/normalize.css');
require('./styles/main.scss');

const React = require('react');
const firebaseUtils = require('./utils/FirebaseUtils');

let Navigation = require('./components/Navigation');
let Welcome = require('./components/welcome/Welcome');
let ListContainer = require('./components/list/ListContainer');
let Register = require('./components/login/Register');

class App extends React.Component {

    render() {

        let ui = null;
        let loggedIn = firebaseUtils.isLoggedIn();
        //let publicPages = ['home'];

        if(!loggedIn && this.props.route !== "home") {
            ui = <RegisterRoute />;
        }else {

            switch(this.props.route) {

                case "home":
                    ui = <HomeRoute />;
                    break;

                case "list":
                    ui = <ListRoute />;
                    break;

                case "register":
                    ui = <RegisterRoute />;
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
                <Welcome />
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

class RegisterRoute extends React.Component {

    render() {
        return (
            <div>
                <Navigation />
                <Register />
            </div>
        )
    }
}

module.exports = App;

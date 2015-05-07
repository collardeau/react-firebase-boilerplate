require('normalize.css/normalize.css');
require('./styles/main.scss');

const React = require('react');
const authUtils = require('./utils/authUtils');

// top level components for layouts
let Navigation = require('./components/Navigation');
let Home = require('./components/Home');
let ListContainer = require('./components/list/ListContainer');
let Login = require('./components/login/Login');
let Account = require('./components/Account');

let homeRoute = (
    <div>
        <Navigation />
        <Home />
    </div>
);

let listRoute = (
    <div>
        <Navigation />
        <ListContainer />
    </div>
);

let loginRoute = (
    <div>
        <Navigation />
        <Login />
    </div>
);

let accountRoute = (
    <div>
        <Navigation />
        <Account />
    </div>
);

class App extends React.Component {

    render() {

        let ui = null;

        switch(this.props.route) {  // current hash is given to you

            case "home":
                ui = homeRoute;
                break;

            case "list":
                ui = listRoute;
                break;

            case "login":
                ui = loginRoute;
                break;

            case "account":
                ui = accountRoute;
                break;

            default:
                ui = homeRoute;
        }

        return ui ;

    }
}

module.exports = App;

require('normalize.css/normalize.css');
require('./styles/main.scss');

const React = require('react');

// top level components for layouts
let Navigation = require('./components/Navigation');
let Home = require('./components/Home');
let ListContainer = require('./components/list/ListContainer');

let Login = require('./components/login/Login');
let Account = require('./components/Account');
let D3Container = require('./components/d3/D3Container');

class App extends React.Component {

    render() {

        let ui = null;

        switch(this.props.route) {

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

            case "d3":
                ui = <D3Route />;
                break;

            default:
                ui = homeRoute;
        }

        return ui ;

    }
}

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

class D3Route extends React.Component {

    render() {
        return (
            <div>
                <Navigation />
                <D3Container />
            </div>
        )
    }
}

module.exports = App;

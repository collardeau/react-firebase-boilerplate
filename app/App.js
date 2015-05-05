require('normalize.css/normalize.css');
require('./styles/main.scss');

const React = require('react');

let Navigation = require('./components/Navigation');
let Welcome = require('./components/welcome/Welcome');
let ListContainer = require('./components/list/ListContainer');

class App extends React.Component {

    render() {

        let ui = null;

        switch(this.props.route) {

            case "home":
                ui = <HomeRoute />;
                break;

            case "list":
                ui = <ListRoute />;
                break;

            default:
                ui = <HomeRoute />;
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

module.exports = App;

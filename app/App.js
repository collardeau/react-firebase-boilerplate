require('normalize.css/normalize.css');
require('./styles/main.scss');

const React = require('react');

let AppContainer = require('./components/AppContainer');
let Navigation = require('./components/Navigation');
let Welcome = require('./components/welcome/Welcome');
let ListContainer = require('./components/list/ListContainer');

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


class App extends React.Component {

    render() {
        let ui = null;

        switch(this.props.route) {
            case "welcome":
                ui = <HomeRoute />;
                break;
            case "list":
                ui = <ListRoute />;
                break;
            default:
                ui = <HomeRoute />;
        }

        return (
            <div>
                { ui }
                { this.props.route}
            </div>
        )
    }


}

module.exports = App;




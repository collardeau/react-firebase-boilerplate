const React = require('react');
const hasher = require('hasher');

let authUtils = require('./utils/authUtils');
let App = require('./App');

let privateViews = ['account', 'more private routes'];
let isPrivateRoute = (route) => privateViews.some((view) =>  view === route);

class Router extends React.Component {

    constructor() {
        super();
        this.state = {
            hash : ""
        };
    }

    componentDidMount() {
        hasher.changed.add(this.handleChanges.bind(this));
        hasher.initialized.add(this.handleChanges.bind(this));
        hasher.init();

        this.setState({
            hash: hasher.getHash()
        })
    }

    componentWillUpdate() {
        let route = hasher.getHash();
        if(isPrivateRoute(route) && authUtils.isLoggedOut()) {
            hasher.setHash('login');
        }
    }

    handleChanges(newHash, oldHash) {
        this.setState({
            hash: newHash
        });
    }

    render () {
        return (
            <App route={ this.state.hash } />
        )
    }
}

React.render(
    <Router />,
    document.getElementById('app')
);

module.exports = Router;

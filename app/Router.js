const React = require('react');
const hasher = require('hasher');

let authUtils = require('./utils/authUtils');
let App = require('./App');

let privateViews = ['account', 'more private routes'];

let isPrivateRoute = (route) => {
    return privateViews.some((view) => {
        return view === route;
    });
};

class Router extends React.Component {

    constructor() {
        super();
        this.state = {hash : ""};
        this.handleChanges = this.handleChanges.bind(this);
    }

    componentDidMount() {
        hasher.changed.add(this.handleChanges);
        hasher.initialized.add(this.handleChanges);
        hasher.init();

        this.setState({
            hash: hasher.getHash()
        })
    }

    componentWillUpdate() {
        let route = hasher.getHash();
        if(authUtils.isLoggedOut() && isPrivateRoute(route)) {
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
            <App route={ this.state.hash }/>
        )
    }

}

React.render(
    <Router />,
    document.getElementById('app')
);

module.exports = Router;

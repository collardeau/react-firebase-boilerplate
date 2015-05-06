const React = require('react');
const hasher = require('hasher');

let authUtils = require('./utils/authUtils');
let App = require('./App');

let privateViews = ['account', 'more private routes'];

let isPrivateRoute = function(route) {
    var isPrivate = false;
    for (let i=0, l = privateViews.length; i < l; i++) {
        if(route === privateViews[i]) {
            isPrivate = true;
        }
    }
    return isPrivate
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

const React = require('react');
const crossroads = require('crossroads');
const hasher = require('hasher');

let App = require('./App');

class Router extends React.Component {

    constructor() {
        super();
        this.state = {hash : undefined};
        this.handleChanges = this.handleChanges.bind(this);
    }

    componentDidMount() {
        hasher.changed.add(this.handleChanges);
        hasher.initialized.add(this.handleChanges);
        hasher.init();
        this.state = {
            hash: hasher.getHash()
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

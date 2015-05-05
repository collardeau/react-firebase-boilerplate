const React = require('react');
const crossroads = require('crossroads');
const hasher = require('hasher');
let App = require('./App');

class Router extends React.Component {

    handleChanges(newHash, oldHash) {
        console.log(newHash);
        this.setState({
            hash: newHash
        });
    }


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

    render () {

        return (

            // depending on the has, a different layout

            <div>
                <h1>Router</h1>
                {this.state.hash}
                <App />

            </div>
        )

    }


}

React.render(
    <Router />,
    document.getElementById('app')
);

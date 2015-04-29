const React = require('react');
const Router = require('react-router');
const RouteHandler = Router.RouteHandler;
const Link = Router.Link;

let listStore = require('../stores/listStore');
let listActions = require('../actions/listActions');

class AppContainer extends React.Component {

    constructor() {
        this.state = {
            listCount: 0
        };
        this.changeContent = this.changeContent.bind(this);
    }

    componentDidMount() {
        listStore.addChangeListener(this.changeContent);
        listActions.getList();
    }

    componentWillUnMount() {
        listStore.removeChangeListener(this._onChange);
    }

    render() {

        let styles = {
            container: {
                width: "80%",
                margin: "0 auto"
            }
        };

        return (
            <div style={styles.container}>
                <h1>App</h1>
                <nav>
                    <Link to="welcome">Welcome</Link>
                    <br />
                    <Link to="list">List</Link> - { this.state.listCount } items
                </nav>

                <RouteHandler />

            </div>

        )
    }

    changeContent() {
        this.setState({
            listCount: listStore.getListCount()
        })
    }

}

module.exports = AppContainer;
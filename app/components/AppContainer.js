const React = require('react');
const Router = require('react-router');
const RouteHandler = Router.RouteHandler;
const Link = Router.Link;

let listStore = require('../stores/listStore');
let listActions = require('../actions/listActions');

let Navigation = require('./Navigation');

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

        return (
            <div className="container">

                <Navigation listCount={ this.state.listCount }/>

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
'use strict';

const React = require('react');
let ListContainer = require('./ListContainer');
let ToggleContent = require('./ToggleContent');
let listStore = require('../stores/listStore');
let listActions = require('../actions/listActions');


class AppContainer extends React.Component {

    constructor() {
        //super();
        this.state = { list: [], toggleIsOpen: false };
        this.changeContent = this.changeContent.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    componentDidMount() {
        listStore.addChangeListener(this.changeContent);
        listActions.getList("demo"); // throwing away demo for now
    }

    componentWillUnMount() {
        listStore.removeChangeListener(this._onChange);
    }

    handleToggle(){
        this.setState({
            toggleIsOpen: !this.state.toggleIsOpen
        });
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
                    <button>List</button>
                    <button>Things</button>
                </nav>

                <ListContainer list={ this.state.list }/>
                <a href='#' onClick={this.handleToggle}>Collapsable Content</a>
                <ToggleContent isOpen={this.state.toggleIsOpen} />
            </div>

        )
    }

    changeContent() {
        this.setState({
            list: listStore.getList()
        })
    }

}

module.exports = AppContainer;
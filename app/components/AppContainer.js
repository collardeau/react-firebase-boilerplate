'use strict';

const React = require('react');
let ListContainer = require('./ListContainer');
let ToggleContent = require('./ToggleContent');
let listStore = require('../stores/listStore');
let listActions = require('../actions/listActions');


class AppContainer extends React.Component {

    constructor() {
        //super();
        this.state = {
            list: listStore.getListData(),
            toggleIsOpen: false
        };

        this.changeContent = this.changeContent.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    componentDidMount() {
        listStore.addChangeListener(this.changeContent);
        listActions.init();
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
                <h1>My New App</h1>
                <a href='#' onClick={this.handleToggle}>Collapsable Content</a>
                <ToggleContent isOpen={this.state.toggleIsOpen} />
                <ListContainer list={ this.state.list }/>
            </div>

        )
    }

    changeContent() {
        this.setState({
            list: listStore.getListData()
        })
    }

}

module.exports = AppContainer;
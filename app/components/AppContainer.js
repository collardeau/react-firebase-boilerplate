const React = require('react');

let listStore = require('../stores/listStore');
let listActions = require('../actions/listActions');

let Navigation = require('./Navigation');
let ListContainer = require('./list/ListContainer');

class AppContainer extends React.Component {

    constructor() {
        super();
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
            <div id="appContainer">

                <Navigation listCount={ this.state.listCount }/>

                <div className="container">
                    <ListContainer />
                </div>

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
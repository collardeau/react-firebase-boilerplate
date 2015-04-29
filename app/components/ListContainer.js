const React = require('react');
let ListItem = require('./ListItem');
let listActions = require('../actions/listActions');
let listStore = require('../stores/listStore');

class ListContainer extends React.Component {

    constructor() {
        this.state = { list: listStore.getList() };
        this.changeContent = this.changeContent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        listStore.addChangeListener(this.changeContent);
    }

    componentWillUnMount() {
        listStore.removeChangeListener(this._onChange);
    }

    handleSubmit(e) {
        e.preventDefault();
        let newItem = this.refs.newItem.getDOMNode().value;
        listActions.addItem({
            title: newItem
        });
        this.refs.newItem.getDOMNode().value = "";
    }

    handleDelete(index, key){
        listActions.removeItem(index, key);
    }

    render() {

        let list = this.state.list.map((item,index) => {
            return (
                <ListItem key={index} item={ item } onDelete={this.handleDelete.bind(this, index, item.key)}/>
            )
        });

        return (
            <div>
                <h3>My List</h3>
                <form onSubmit={this.handleSubmit}>
                    <input ref="newItem" type="text" placeholder="New item" />
                    <button type="submit">Submit</button>
                </form>
                <ul> { list } </ul>

            </div>
        )
    }

    changeContent() {
        this.setState({
            list: listStore.getList()
        })
    }

}

module.exports = ListContainer;
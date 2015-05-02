const React = require('react');
let ListItem = require('./ListItem');
let listActions = require('../../actions/listActions');
let listStore = require('../../stores/listStore');

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
                <h1>My List</h1>

                <form onSubmit={this.handleSubmit}>
                    <input ref="newItem" type="text" placeholder="New item" />
                    <button className="btn-action" type="submit">Submit</button>
                </form>
                <br />

                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        { list }
                    </tbody>
                </table>


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
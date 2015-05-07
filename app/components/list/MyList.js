const React = require('react');
let ListItem = require('./ListItem');
let myListActions = require('../../actions/myListActions');
let myListStore = require('../../stores/myListStore');

class MyList extends React.Component {

    constructor() {
        super();
        this.state = { list: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeContent = this.changeContent.bind(this);
    }

    componentDidMount() {
        myListStore.addChangeListener(this.changeContent);
        myListActions.getList();
    }

    componentWillUnmount() {
        myListStore.removeChangeListener(this.changeContent);
    }

    returnList() {
        return myListStore.getList();
    }

    addItem(newItem) {
        myListActions.addItem({
            title: newItem
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let newItem = this.refs.newItem.getDOMNode().value;
        if(newItem !== "") {
            this.addItem(newItem);
        }
        this.refs.newItem.getDOMNode().value = "";
    }

    handleDelete(index, key){
        myListActions.removeItem(index, key);
    }

    render() {

        let list = this.state.list.map((item,index) => {
            return (
                <ListItem key={index} item={ item } onDelete={this.handleDelete.bind(this, index, item.key)}/>
            )
        });

        return (
            <div>
                <h1>Private List</h1>

                <form onSubmit={this.handleSubmit}>
                    <input ref="newItem" type="text" placeholder="New item" />
                    <button className="btn-action">Submit</button>
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
            list: this.returnList()
        })
    }

}

module.exports = MyList;
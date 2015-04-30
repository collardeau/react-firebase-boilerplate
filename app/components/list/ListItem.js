const React = require('react');

//<li>
//                {this.props.item.title}
//    <button onClick={this.props.onDelete}>x</button>
//</li>


class ListItem extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.item.title}</td>
                <td><button onClick={this.props.onDelete}>X</button></td>
            </tr>
        )
    }
}

module.exports = ListItem;
const React = require('react');

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
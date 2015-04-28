const React = require('react');

class ListItem extends React.Component {

    render() {
        return (
            <li>
                {this.props.item.title}
                <button onClick={this.props.onDelete}>x</button>
            </li>
        )
    }
}

module.exports = ListItem;
const React = require('react');

class ToggleContent extends React.Component {

    render() {

        var styles = {
            content: {
                display: this.props.isOpen ? "block" : "none"
            }
        };

        return (
            <div style={styles.content}>
                Some extra content
            </div>
        )
    }
}

module.exports = ToggleContent;
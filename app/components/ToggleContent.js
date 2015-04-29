const React = require('react');

class ToggleContent extends React.Component {

    //constructor(props) {
    //    super(props);
    //}

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
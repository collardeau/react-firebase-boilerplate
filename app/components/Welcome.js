const React = require('react');
let ToggleContent = require('./ToggleContent');

class Welcome extends React.Component {

    constructor() {
        this.state = { toggleIsOpen: false };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(e){
        e.preventDefault();
        this.setState({
            toggleIsOpen: !this.state.toggleIsOpen
        });
    }

    render(){
        return (
            <div>
                <h1>Welcome</h1>

                <a href='#' onClick={this.handleToggle}>Collapsable Content</a>
                <ToggleContent isOpen={this.state.toggleIsOpen} />
            </div>
        )
    }

}

module.exports = Welcome;
const React = require('react');

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

        var styles = {
            content: {
                display: this.state.toggleIsOpen ? "block" : "none"
            }
        };

        return (
            <div id="welcome">
                <h1>Welcome</h1>

                <section>

                    <aside>What is it about</aside>
                    <article>Neat is an open source semantic grid framework built on top of Sass and Bourbon…</article>
                </section>

                <div>
                    <a href='#' onClick={this.handleToggle}>Collapsable Content</a>
                    <div style={styles.content}>
                        Some extra content
                    </div>
                </div>

            </div>
        )
    }

}

module.exports = Welcome;
/**
 * Created by Thomas on 5/6/15.
 */
const React = require('react');

class Welcome extends React.Component {

    constructor() {
        super();
        this.state = {
            toggleIsOpen: false
        };
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
            <div className="container">
                <h1>Welcome</h1>

                <section>
                    <aside>What is this about</aside>
                    <article>Here is a Neat semantic grid built on top of Sass and Bourbon</article>
                </section>
                <section>
                    <aside>Tell more</aside>
                    <article>Check out <a href="http://thoughtbot.github.io/neat-docs/latest/#column">Burbon Neat</a></article>
                </section>

                <hr/>
                <div>
                    <a href='#' onClick={this.handleToggle.bind(this)}>Collapsable Content</a>
                    <div style={styles.content}>
                        Collapsable section toggled with React state
                    </div>
                </div>

            </div>
        )
    }

}

module.exports = Welcome;
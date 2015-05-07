const React = require('react');
let authUtils = require('../../utils/authUtils');

class Login extends React.Component {

    constructor() {
        super();
        this.state =  {
            warning: ""
        }
    }

    handleRegister(e){
        let email = this.refs.email.getDOMNode().value;
        let pw = this.refs.pw.getDOMNode().value;
        authUtils.createUser({email: email, password: pw}, {
            warn: (error) => {
                this.setState({
                    warning: error.message
                })
            }
        });
        this.refs.email.getDOMNode().value = "";
        this.refs.pw.getDOMNode().value = "";
        e.preventDefault();
    }

    handleLogin(e){
        let email = this.refs.email.getDOMNode().value;
        let pw = this.refs.pw.getDOMNode().value;
        authUtils.loginWithPw({email: email, password: pw}, {
            warn: (error) => {
                this.setState({
                    warning: error.message
                })
            }
        });
        this.refs.email.getDOMNode().value = "";
        this.refs.pw.getDOMNode().value = "";
        e.preventDefault();
    }

    render() {

        var warning = (
            <div className="flash-error">
                <span>{ this.state.warning }</span>
            </div>
        );

        return (
            <div className="container">
                <h1>Your Account</h1>

                {this.state.warning ? warning : ""}

                <form>
                    <label>Email</label>
                    <input type="text" ref="email" placeholder="Email"/>
                    <label>Password</label>
                    <input type="password" ref="pw" placeholder="Password"/>
                    <button onClick={this.handleLogin.bind(this)} className="btn btn-action">Login</button>
                    <button onClick={this.handleRegister.bind(this)} className="btn btn-action">Register</button>
                </form>
            </div>
        )
    }
}

module.exports = Login;
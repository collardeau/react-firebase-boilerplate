const React = require('react');
let authUtils = require('../../utils/authUtils');

class Login extends React.Component {

    constructor() {
        super();
        this.state =  {
            message: ""
        }
    }

    handleRegister(e){
        console.log("handling register");
        e.preventDefault();
        let email = this.refs.email.getDOMNode().value;
        let pw = this.refs.pw.getDOMNode().value;
        authUtils.createUser({email: email, password: pw}, function(result){
            console.log(result);
        });
        this.refs.email.getDOMNode().value = "";
        this.refs.pw.getDOMNode().value = "";
    }

    handleLogin(e){
        console.log("handling login");
        e.preventDefault();
        let email = this.refs.email.getDOMNode().value;
        let pw = this.refs.pw.getDOMNode().value;
        authUtils.loginWithPw({email: email, password: pw}, {
            warn: (error) => {
                this.setState({
                    message: error.message
                })
            }
        });
        this.refs.email.getDOMNode().value = "";
        this.refs.pw.getDOMNode().value = "";

    }

    render() {

        let message = (
          <div>{this.state.message}</div>
        );

        return (
            <div className="container">
                <h1>Your Account</h1>

                { message }

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
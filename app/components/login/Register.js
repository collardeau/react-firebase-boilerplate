const React = require('react');
let authUtils = require('../../utils/authUtils');

class Register extends React.Component {

    constructor(){
        super();
        this.handleRegister = this.handleRegister.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
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
        authUtils.loginWithPw({email: email, password: pw});
        this.refs.email.getDOMNode().value = "";
        this.refs.pw.getDOMNode().value = "";

    }

    handleLogout(e){
        console.log("handling logout");
        e.preventDefault();
        authUtils.logout();
    }

    render() {
        return (
            <div className="container">
                <h1>Login or Register</h1>

                <form>
                    <label>Email</label>
                    <input type="text" ref="email" placeholder="Email"/>
                    <label>Password</label>
                    <input type="password" ref="pw" placeholder="Password"/>
                    <button onClick={this.handleRegister} className="btn btn-action">Register</button>
                    <button onClick={this.handleLogin} className="btn btn-action">Login</button>
                    <button onClick={this.handleLogout} className="btn-alert">Log Out</button>
                </form>
            </div>
        )
    }
}

module.exports = Register;



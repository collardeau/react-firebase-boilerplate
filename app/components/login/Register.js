const React = require('react');
let firebaseUtils = require('../../utils/FirebaseUtils');

class Register extends React.Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        let email = this.refs.email.getDOMNode().value;
        let pw = this.refs.pw.getDOMNode().value;
        firebaseUtils.createUser({email: email, password: pw}, function(result){
            console.log(result);
        });
        this.refs.email.getDOMNode().value = "";
        this.refs.pw.getDOMNode().value = "";
    }

    render() {
        return (
            <div className="container">
                <h1>Register</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input type="text" ref="email" placeholder="Email"/>
                    <label>Password</label>
                    <input type="text" ref="pw" placeholder="Password"/>
                    <button type="submit" className="btn btn-action">Login</button>
                </form>
            </div>
        )
    }
}

module.exports = Register;



const Firebase = require('firebase');
const appConstants = require('../constants/appConstants');
let hasher = require('hasher');
let ref = new Firebase(appConstants.FIREBASE_HOST);

let addNewUserToFB = function(newUser){
    ref.child('user').child(newUser.uid).set(newUser);
};

let firebaseAuth = {

    createUser: function(user) {
        console.log("creating user");
        ref.createUser(user, function(err) {
            if (err) {
                switch (err.code) {
                    case "EMAIL_TAKEN":
                        console.log("The new user account cannot be created because the email is already in use.");
                        break;
                    case "INVALID_EMAIL":
                        console.log("The specifiedsdfs email is not a valid email.");
                        break;
                    default:
                        console.log("Error creating user:", err);
                }
            } else {
                this.loginWithPw(user, function(authData){
                    addNewUserToFB({
                        email: user.email,
                        uid: authData.uid,
                        token: authData.token
                    });
                });
            }
        }.bind(this));
    },

    loginWithPw: function(user, cb){
        ref.authWithPassword({
            email    : user.email,
            password : user.password
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                cb && cb(authData);   // adding user to db after registering
                hasher.setHash('account');
            }
        })
    },

    isLoggedIn: function(){
        return ref.getAuth();
    },

    logout: function(){
        ref.unauth(function(foo){
            console.log("logging out");
        });
        hasher.setHash('home')
    }

};

module.exports = firebaseAuth;
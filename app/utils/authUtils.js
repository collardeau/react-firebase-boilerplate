const Firebase = require('firebase');
const appConstants = require('../constants/appConstants');
let hasher = require('hasher');
let ref = new Firebase(appConstants.FIREBASE_HOST);

let addNewUserToFB = (newUser) => {
    ref.child('user').child(newUser.uid).child("info").set(newUser);
};

let firebaseAuth = {

    createUser: function(user, options) {
        ref.createUser(user, function(error) {
            if (error) {

                options.warn && options.warn(error);

            } else {

                this.loginWithPw(user, {

                    register: (authData) => {
                        addNewUserToFB({
                            email: user.email,
                            uid: authData.uid,
                            token: authData.token
                        });
                    }
                });
            }
        }.bind(this));
    },

    loginWithPw: function(user, options){

        ref.authWithPassword({

            email    : user.email,
            password : user.password

        }, function(error, authData) {

            if (error) {

                options.warn && options.warn(error);

            } else {

                options.register && options.register(authData);
                hasher.setHash('account');

            }

        })
    },

    isLoggedIn: function(){

        return ref.getAuth();
    },

    isLoggedOut: function(){
        return !this.isLoggedIn()
    },

    logout: function(){
        ref.unauth(function(foo){
            console.log("logging out");
        });
        hasher.setHash('home')
    }

};

module.exports = firebaseAuth;
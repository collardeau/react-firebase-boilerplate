var Firebase = require('firebase');
var appConstants = require('../constants/appConstants');
var ref = new Firebase(appConstants.FIREBASE_HOST);

var addNewUserToFB = function(newUser){
    ref.child('user').child(newUser.uid).set(newUser);
};

//function authDataCallback(authData) {
//    if (authData) {
//        console.log("User " + authData.uid + " is logged in with " + authData.provider);
//    } else {
//        console.log("User is logged out");
//    }
//}

var firebaseUtils = {

    homeInstance: function () {
        return new Firebase(appConstants.FIREBASE_HOST);
    },

    addItem: function (item) {
        this.homeInstance().child("list").push(item);
    },

    removeItem: function (key) {
        this.homeInstance().child("list").child(key).remove();
    },

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
            }
        })
    },

    isLoggedIn: function(){
        return ref.getAuth();
    },

    logout: function(){
        ref.unauth(function(foo){
            console.log("logging out");
            console.log(foo);
        });
    },

    toArray: function (obj) {
        var arr = [];
        for (var key in obj) {
            obj[key].key = key;
            arr.push(obj[key]);
        }
        return arr;
    }
};

module.exports = firebaseUtils;
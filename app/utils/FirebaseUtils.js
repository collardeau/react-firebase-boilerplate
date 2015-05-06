var Firebase = require('firebase');
var appConstants = require('../constants/appConstants');
var ref = new Firebase(appConstants.FIREBASE_HOST);

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

    createUser: function(user, cb) {
        ref.createUser(user, function(err) {
            if (err) {
                switch (err.code) {
                    case "EMAIL_TAKEN":
                        console.log("The new user account cannot be created because the email is already in use.");
                        break;
                    case "INVALID_EMAIL":
                        console.log("The specified email is not a valid email.");
                        break;
                    default:
                        console.log("Error creating user:", err);
                }
            } else {
                //this.loginWithPW(user, function(authData){
                //    addNewUserToFB({
                //        email: user.email,
                //        uid: authData.uid,
                //        token: authData.token
                //    });
                //}, cb);
                console.log("created a user!");
            }
        }.bind(this));
    },
    //
    //loginWithPW: function(userObj, cb, cbOnRegister){
    //    ref.authWithPassword(userObj, function(err, authData){
    //        if(err){
    //            console.log('Error on login:', err.message);
    //            cbOnRegister && cbOnRegister(false);
    //        } else {
    //            authData.email = userObj.email;
    //            cachedUser = authData;
    //            cb(authData);
    //            this.onChange(true);
    //            cbOnRegister && cbOnRegister(true);
    //        }
    //    }.bind(this));
    //},

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
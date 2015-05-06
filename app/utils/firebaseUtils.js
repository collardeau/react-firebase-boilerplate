var Firebase = require('firebase');
var appConstants = require('../constants/appConstants');
var ref = new Firebase(appConstants.FIREBASE_HOST);

var addNewUserToFB = function(newUser){
    ref.child('user').child(newUser.uid).set(newUser);
};

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
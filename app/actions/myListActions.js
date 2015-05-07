let AppDispatcher = require('../dispatcher/AppDispatcher');
let appConstants = require('../constants/appConstants');
let firebaseUtils = require('../utils/firebaseUtils');
let authUtils = require('../utils/authUtils');

let loggedIn = authUtils.isLoggedIn();
let uid = (loggedIn && loggedIn.uid) || "demo";

let storage = firebaseUtils.homeInstance().child('user').child(uid).child('list');

let myListActions = {
    getList(list) {
        storage.on('value', function(snapshot){
            AppDispatcher.handleAction({
                actionType: appConstants.GET_DATA,
                data: {
                    list: firebaseUtils.toArray(snapshot.val())
                }
            });
        });
    },

    addItem(item) {
        AppDispatcher.handleAction({
            actionType: appConstants.ADD_ITEM,
            data: item
        });
        storage.push(item);
    },

    removeItem(index, key) {
        AppDispatcher.handleAction({
            actionType: appConstants.REMOVE_ITEM,
            data: index
        });
        storage.child(key).remove();
    }

};

module.exports = myListActions;
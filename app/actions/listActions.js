let AppDispatcher = require('../dispatcher/AppDispatcher');
let appConstants = require('../constants/appConstants');
let firebaseUtils = require('../utils/firebaseUtils');

let listActions = {
    getList(list) {
        firebaseUtils.homeInstance().child('list').on('value', function(snapshot){
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
        firebaseUtils.addItem(item);
    },

    removeItem(index, key) {
        AppDispatcher.handleAction({
            actionType: appConstants.REMOVE_ITEM,
            data: index
        });
        firebaseUtils.removeItem(key);
        // what if connection fails? how to revert action?

    }

};

module.exports = listActions;
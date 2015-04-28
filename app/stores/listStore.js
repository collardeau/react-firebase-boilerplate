let AppDispatcher = require('../dispatcher/AppDispatcher');
let appConstants = require('../constants/appConstants');
let objectAssign = require('react/lib/Object.assign');
let EventEmitter = require('events').EventEmitter;

let CHANGE_EVENT = 'change';

let _store = {
    list: []
};

let init = function(target){
    _store.list = target;
};

let addItem = function(target){
  _store.list.push(target);
};

let removeItem = function(index){
    _store.list.splice(index, 1);
};

let listStore = objectAssign({}, EventEmitter.prototype, {

    getListData() {
        return _store.list;
    },

    addChangeListener(cb) {
        this.on(CHANGE_EVENT, cb);
    },

    removeChangeListener(cb) {
        this.removeListener(CHANGE_EVENT, cb);
    }

});

AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType){
        case appConstants.GET_DATA:
            init(action.data.list);
            listStore.emit(CHANGE_EVENT);
            break;
        case appConstants.ADD_ITEM:
            addItem(action.data);
            listStore.emit(CHANGE_EVENT);
            break;
        case appConstants.REMOVE_ITEM:
            removeItem(action.data.index);
            listStore.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }
});

module.exports = listStore;
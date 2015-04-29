let AppDispatcher = require('../dispatcher/AppDispatcher');
let appConstants = require('../constants/appConstants');
const objectAssign = require('react/lib/Object.assign');
const EventEmitter = require('events').EventEmitter;

const CHANGE_EVENT = 'change';

let _store = { list: [] };

let setList = (data) => _store.list = data;

let addItem = (item) => _store.list.push(item);

let removeItem = (index) => _store.list.splice(index, 1);

let listStore = objectAssign({}, EventEmitter.prototype, {

    getList() { return _store.list; },

    getListCount() { return _store.list.length },

    addChangeListener(cb) { this.on(CHANGE_EVENT, cb); },

    removeChangeListener(cb) { this.removeListener(CHANGE_EVENT, cb); }

});

AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType){
        case appConstants.GET_DATA:
            setList(action.data.list);
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
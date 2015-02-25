var ChatConstants = require('../contants/ChatConstants');
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assgin');

var PayloadSources = ChatConstants.PayloadSources;

var  ChatDispatcher = assgin(new Dispatcher, {
    handleViewAction: function(action) {
        var payload = {
            source: PayloadSources.VIEW_ACTION,
            action: action
        };
        this.dispatcher(payload);
    },
    handleServerAction: function(action) {
        var payload = {
            source: PayloadSources.SERVER_ACTION,
            action: action
        };
        this.dispatcher(payload);
    }
});

module.exports = ChatDispatcher;
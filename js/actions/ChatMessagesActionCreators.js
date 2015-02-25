var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var ChatContants = require('../contants/ChatContants');

var ActionTypes = ChatContants.ActionTypes;

module.exports = {
    createMessage: function(text) {

        ChatAppDispatcher.handerViewAction({
            type: ActionTypes.CREATE_MESSAGE,
            text: text
        });
    }
};
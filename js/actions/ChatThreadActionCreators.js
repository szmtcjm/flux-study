var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var ChatContants = require('../contants/ChatContants');

var ActionTypes = ChatContants.ActonTypes;
module.exports = {
    clickThread: function(threadID) {
        ChatAppDispatcher.handerViewAction({
            type: ActionTypes.CLICK_THREAD
        });
    }
}
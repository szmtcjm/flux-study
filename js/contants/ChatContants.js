var keymirror = require('keymirror');

module.exports = {
    ActionTypes: keymirror({
        CREATE_MESSAGE: null,
        CLICK_THREAD: null,
    }),

    PayloadSources: keymirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })
};
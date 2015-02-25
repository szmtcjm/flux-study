var UnreadThreadStore = require('../store/UnreadThreadStore');
var ThreadStore = require('../store/ThreadStore');
var ThreadListItem = require('./ThreadListItem.react');

function getStatesFromStore() {
    return {
        threads: ThreadStore.getAllThreads(),
        currentThreadID: ThreadStore.getCurrentID(),
        unreadThreadCount: UnreadThreadStore.getCount()
    };
}

var ThreadSection = React.createClass({
    getInitStates: function() {
        return getStatesFromStore();
    },
    componentDidMount: function() {
        ThreadStore.addChangeListener(this._onChange);
        UnreadThreadStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        ThreadStore.removeChangeListener(this._onChange);
        UnreadThreadStore.removeChangeListener(this._onChange);
    },
    render: function() {
        var threadListItems = this.state.threads.map(function(thread) {
            return (
                <ThreadListItem
                    key={thread.id}
                    thread={thread}
                    currentThreadID={this.state.currentThreadID}
                />
            );
        }, this);
        var unread = this.state.unreadThreadCount === 0 ? null :
            <span>Unread threads: {this.state.unreadCount}</span>;
        return (
            <div className="thread-section">
                <div className="thread-count">
                    {unread}
                </div>
                <ul className="thread-list">
                    {threadListItems}
                </ul>
            </div>
        );
    },
    _onChange: function() {
        this.setState(getStatesFromStore());
    }
});

module.exports = ThreadSection;
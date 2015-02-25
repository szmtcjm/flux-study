var ThreadSection = require('./ThreadSection.react');
var MessagesSection = require('./MessagesSection.react');

var ChatApp = React.createClass({
    render: function() {
        return (
            <div>
                <ThreadSection />
                <MessagesSection />
            </div>
        );
    }
});

module.exports = ChatApp;
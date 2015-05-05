require('normalize.css/normalize.css');
require('./styles/main.scss');

const React = require('react');
let AppContainer = require('./components/AppContainer');

let App = React.createClass({
    render: function(){
        return (
            <AppContainer />
        )
    }
});

React.render(
    <App />,
    document.getElementById('app')
);
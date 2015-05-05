require('normalize.css/normalize.css');
require('./styles/main.scss');
const crossroads = require('crossroads');

const React = require('react');
let AppContainer = require('./components/AppContainer');

var route1 = crossroads.addRoute('list', function(){
    console.log("yo");
});

crossroads.parse(document.location.pathname);

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
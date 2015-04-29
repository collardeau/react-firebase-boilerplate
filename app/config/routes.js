var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var AppContainer = require('../components/AppContainer');
var ListContainer = require('../components/list/ListContainer');
var Welcome = require('../components/welcome/Welcome');

var routes = (
    <Route handler={AppContainer} >
        <Route name="home" path="/" handler={Welcome} />
        <Route name="welcome" path="welcome" handler={Welcome} />
        <Route name="list" path="list" handler={ListContainer} />
    </Route>
);

module.exports = routes;
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var AppContainer = require('../components/AppContainer');
var ListContainer = require('../components/ListContainer');
var Welcome = require('../components/Welcome');

var routes = (
    <Route handler={AppContainer} >
        <Route name="home" path="/" handler={Welcome} />
        <Route name="welcome" path="welcome" handler={Welcome} />
        <Route name="list" path="list" handler={ListContainer} />
    </Route>
);

module.exports = routes;
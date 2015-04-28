const React = require('react');
let AppContainer = require('./components/AppContainer');

class App extends React.Component {
    render() {
        return (
            <div>
                <AppContainer />
            </div>
        )
    }
}

React.render(
    <App />,
    document.getElementById('app')
);
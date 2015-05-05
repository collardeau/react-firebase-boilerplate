const React = require('react');
const $ = require('jquery');
const hasher = require('hasher');

class Navigation extends React.Component {

    handleLink(e) {
        // name of link has to match!
        e.preventDefault();
        let link = e.target.innerHTML.toLowerCase();
        hasher.setHash(link);
    }

    componentDidMount() {
        var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
        $('#js-centered-navigation-menu').removeClass("show");

        menuToggle.on('click', function(e) {
            e.preventDefault();
            $('#js-centered-navigation-menu').slideToggle(function(){
                if($('#js-centered-navigation-menu').is(':hidden')) {
                    $('#js-centered-navigation-menu').removeAttr('style');
                }
            });
        });

    }

    componentWillUnMount() {
        //
    }

    render() {

        return (
            <header className="centered-navigation" role="banner">

                <div className="centered-navigation-wrapper">
                    <a href="javascript:void(0)" className="mobile-logo">
                        <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_3_dark.png" alt="Logo image" />
                    </a>
                    <a href="javascript:void(0)" id="js-centered-navigation-mobile-menu" className="centered-navigation-mobile-menu">MENU</a>
                    <nav role="navigation">
                        <ul id="js-centered-navigation-menu" className="centered-navigation-menu show">
                            <li className="nav-link">
                                <a onClick={this.handleLink }>Home</a>
                            </li>
                            <li className="nav-link">
                                <a onClick={this.handleLink } >List</a>
                            </li>

                            <li className="nav-link logo">
                                <a href="javascript:void(0)" className="logo">
                                    <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_3_dark.png" alt="Logo image" />
                                </a>
                            </li>

                            <li className="nav-link more">
                                <a href="javascript:void(0)">More</a>
                                <ul className="submenu">
                                    <li>
                                        <a href="javascript:void(0)">Submenu Item</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Another Item</a>
                                    </li>
                                    <li className="more">
                                        <a href="javascript:void(0)">Item with submenu</a>
                                        <ul className="submenu">
                                            <li>
                                                <a href="javascript:void(0)">Sub-submenu Item</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">Another Item</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                                <li className="nav-link">
                                    <a href="javascript:void(0)">Sign up</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
        )
    }
}

module.exports = Navigation;
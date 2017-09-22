import React from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component {
    render() {

        return (
            <div>
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">Brand</a>
                        </div>

                        <div class="navbar-collapse collapse" id="bs-example-navbar-collapse-1" aria-expanded="false">
                            <ul class="nav navbar-nav">
                                <li>
                                    <NavLink to='/'>
                                        Todos
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/home'>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/about'>
                                        about
                                    </NavLink>
                                </li>
                            </ul>

                            {/*<ul class="nav navbar-nav navbar-right">*/}
                            {/*<li><a href="#">Link</a></li>*/}
                            {/*</ul>*/}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;

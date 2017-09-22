import React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import Home from '../../pages/home';
import About from '../../pages/about';
import Todos from '../../pages/todos';
import {BrowserRouter, Route} from 'react-router-dom';

class Layout extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <div class="container">
                            <Route exact path='/' component={Todos}/>
                            <Route path='/home' component={Home}/>
                            <Route path='/about/:id?' component={About}/>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
export default Layout;

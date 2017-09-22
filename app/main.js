import React from 'react';
import ReactDOM from 'react-dom';
import AppDispatchers from './dispatchers/appDispatchers';
import AppConstants from './constants/appConstants';
const actions = {};


export default actions;

//Components
import Layout from './components/layout/layout';

const app = document.getElementById('app');
ReactDOM.render(
    <Layout/>, app);




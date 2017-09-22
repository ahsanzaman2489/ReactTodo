import React from 'react';
import AppActions from '../actions/AppActions';
import AppStores from '../stores/TodoStores';

function getAppState() {
  return {};
}

export default class App extends React.Component {
  getInitialState() {
    return getAppState();
  }
  render() {
    return (
      <div>
        My App
      </div>
    );
  }

  _onchange() {
    this.setState(getAppState());
  }
}

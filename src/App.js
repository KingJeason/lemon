import React, { Component } from 'react';
import './App.css';
import Layout from './layouts/BasicLayout';
// import Page from './pages/draft/index'
import { Provider } from 'react-redux'
import store from './store/reducer'
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
      // <Page/>
    );
  }
}

export default App;

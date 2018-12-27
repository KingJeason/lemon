import React, { Component } from 'react';
import './App.css';
import Layout from './layouts/BasicLayout';
import Draft from './pages/draft/index'
import { Provider } from 'react-redux'
import store from './store/reducer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
@withRouter
class App extends Component {
  render () {
    return (
      <Provider store={ store }>
        <Switch>
          <Route path="/drafts" component={ Draft } />
          <Route path="/" component={ Layout } />
        </Switch> 
      </Provider>
    );
  }
}

export default App;

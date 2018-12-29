import React, { Component } from 'react';
import './App.css';
import Layout from './layouts/BasicLayout';
import Draft from './pages/draft/index'
import { Provider } from 'react-redux'
import Cookies from 'js-cookie'

import store from './store/reducer'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";

@withRouter
class App extends Component {
  state = {
    token: null
  }
  checkToken () {
    const token = Cookies.get('token')
    if (token) {
      this.setState({ token })
      store.dispatch({
        type: 'GET_ME'
      })
    }
    // if (this.props.location.pathname != '/login') {
    //   if (!Cookies.get('JSESSIONID')) {
    //     this.props.history.replace('/login')
    //   }
    // } else {
    //   if (Cookies.get('JSESSIONID')) {
    //     this.props.history.replace('/home')
    //   }
    // }
  }
  async componentWillMount () {
    await this.checkToken()
    // this.setState({
    //   user: store.getState().user
    // })
    console.log(store.getState())
  }
  componentWillReceiveProps () {
    // this.checkToken()
  }
  render () {
    const { token } = this.state
    const AuthComponent = ({ component: Component }, ...rest) => {
      return (
        <Route
          { ...rest }
          render={ props =>
            token ? (
              <Component { ...props } />
            ) : (
                <Redirect
                  to={ {
                    pathname: "/",
                    state: { from: props.location }
                  } }
                />
              )
          }
        />
      )
    }
    return (
      <Provider store={ store }>
        <Switch>

          <AuthComponent path="/drafts/:id" exact
            component={ Draft } />
          <Route path="/" component={ Layout } />
        </Switch>
      </Provider>
    );
  }
}

export default App;

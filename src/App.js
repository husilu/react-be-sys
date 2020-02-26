import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from '@/views/Login'
import User from '@/views/User/user.jsx'
export default class App extends Component {
  render() {
    // const isLogin = window.localStorage.getItem("user")
    const isLogin = true;
    return (
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/user' component={User} />
          <Redirect to='/user' exact from='/' />
        </Switch>
      </Router>
    )
  }
}

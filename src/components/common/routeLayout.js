import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";

export default class routeLayout extends Component {
  render() {
    console.log(this.props)
    const routes = this.props.route.children;
    return (
      <>
        {routes.map(item => {
          return (
            <Route path={item.path}
            key={item.key}
            render={(props) => {
              return <item.component {...props} route={item} />
            }}>
            </Route>
          )
        })}
      </>
    )
  }
}

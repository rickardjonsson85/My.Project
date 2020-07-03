import React, { Component } from "react";
import "../sass/main.scss";
import { Home, Mental, Brotherhood } from "./Pages/index";
import history from "./common/history";
import { Router, Switch, Route } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        {" "}
        <Router history={history}>
          {" "}
          <Switch>
            {" "}
            <Route
              path="/"
              exact
              render={(props) => <Home {...props} />}
            />{" "}
            <Route path="/mental" render={(props) => <Mental {...props} />} />{" "}
            <Route
              path="/brotherhood"
              render={(props) => <Brotherhood {...props} />}
            />{" "}
          </Switch>{" "}
        </Router>{" "}
      </React.Fragment>
    );
  }
}

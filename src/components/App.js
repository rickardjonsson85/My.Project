import React, { Component } from "react";
import "../sass/simple-grid.scss";
import "../sass/main.scss";
import Brotherhood from "./Pages/brotherhood";
import Mental from "./Pages/mental";
import HomePage from "./Pages/home";
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
              render={(props) => <HomePage {...props} />}
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

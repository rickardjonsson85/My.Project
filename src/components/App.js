import React, { Component } from "react";
import "../sass/simple-grid.scss";
import "../sass/main.scss";
import "../sass/imageslide.scss";

import HomePage from "./Pages/home";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HomePage />
      </React.Fragment>
    );
  }
}

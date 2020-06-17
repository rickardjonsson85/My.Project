import React, { Component } from "react";
import Logo from "../../img/logos/myloggo.png";
import Title from "../Pages/home";

class titleColumnLayout extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-3">
            <div>
              <img className="logoimg" src={Logo} />
            </div>
          </div>
          <div class="col-9">
            <div className="titlediv">
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default titleColumnLayout;

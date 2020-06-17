import React, { Component } from "react";
import logo from "../../img/logos/";
class titleColumnLayout extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-3">
            <div className="logodiv">
              <img src={Logo} />
            </div>
          </div>
          <div class="col-9">
            <p>asfd</p>
          </div>
        </div>
      </div>
    );
  }
}
export default titleColumnLayout;

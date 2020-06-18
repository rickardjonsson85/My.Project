import React, { Component } from "react";
import { Logo } from "../Pages/home";
import { title } from "../Pages/home";

class titleColumnLayout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div>
              <img className="logoimg" src={Logo} />
            </div>
          </div>
          <div className="col-9">
            <div className="titlediv">
              <h1 className="title">{title}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default titleColumnLayout;

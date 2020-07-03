import React, { Component } from "react";

class mobiletitleColumnLayout extends Component {
  render() {
    let { title } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="titlediv">
              <h1 className="titleindiv">{title}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default mobiletitleColumnLayout;

import React, { Component } from "react";
import DynCols from "./dyncols";

class Sections extends Component {
  render() {
    let { vals, backgroundColor, padding } = this.props;

    console.log("vals : " + vals);

    let paddingLocal = padding ? padding : "";
    let backgroundColorLocal = backgroundColor ? backgroundColor : "";
    return (
      <section className={backgroundColorLocal + " " + paddingLocal}>
        <div className="container">
          <DynCols vals={vals} />
        </div>
      </section>
    );
  }
}

export default Sections;

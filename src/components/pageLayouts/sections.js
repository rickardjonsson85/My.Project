import React, { Component } from "react";
import DynCols from "./dyncols";

class Sections extends Component {
  render() {
    let { vals } = this.props;

    console.log("vals : " + vals);

    return (
      <section>
        <div>
          <DynCols vals={vals} />
        </div>
      </section>
    );
  }
}

export default Sections;

import React, { Component } from "react";

// import Button from "../elements/aButton";
class Dyncols extends Component {
  render() {
    let { vals } = this.props;
    let pageContent = vals.map((data, idx) => {
      return (
        <div key={idx} id={idx} className={data.colClass}>
          {data.Slider}
          {data.title}
          {data.body}
          <br />
        </div>
      );
    });
    return (
      <React.Fragment>
        <div className="row"> {pageContent} </div>
      </React.Fragment>
    );
  }
}
export default Dyncols;

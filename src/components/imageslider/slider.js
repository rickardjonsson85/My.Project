import React, { Component } from "react";
import data from "./data";
import PageNum from "./pageNum";
import Arrow from "../../img/Icons/arrow.svg";

class slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data,
      property: data[0]
    };
  }

  nextImage = () => {
    let imageIndex = this.state.property.id;

    if (imageIndex == `${data.length - 1}`) {
      console.log("if körs");
      imageIndex = this.state.property.id - `${data.length - 1}`;
    } else {
      console.log("else körs");
      imageIndex = this.state.property.id + 1;
    }
    this.setState({
      property: data[imageIndex]
    });
  };

  prevImage = () => {
    <Arrow />;
    let imageIndex = this.state.property.id;
    if (imageIndex == 0) {
      console.log("if körs");
      imageIndex = this.state.property.id + `${data.length}` - 1;
    } else {
      console.log("else körs");
      imageIndex = this.state.property.id - 1;
    }
    this.setState({
      property: data[imageIndex]
    });
  };

  render() {
    const { property } = this.state;
    if (property.boxsize == 1) {
      console.log("if körs gärna");
      return (
        <div>
          <div className="slider">
            <PageNum property={property} />
          </div>

          <button onClick={() => this.prevImage()}>BACK</button>
          <button onClick={() => this.nextImage()}>NEXT</button>
        </div>
      );
    } else {
      console.log("if körs inte gärna");
      return (
        <div>
          <PageNum property={property} />
          <button onClick={() => this.prevImage()}>BACK</button>
          <button onClick={() => this.nextImage()}>NEXT</button>
        </div>
      );
    }
  }
}

export default slider;

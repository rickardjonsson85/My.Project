import React, { Component } from "react";
import data from "./data";
import PageNum from "./pageNum";

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
          <button onClick={() => this.prevImage()}>BACK</button>
          <button onClick={() => this.nextImage()}>NEXT</button>
          <br />
          <div className="slider">
            <PageNum property={property} />
          </div>
          <div className="slider">
            <PageNum property={property} />
          </div>
        </div>
      );
    } else {
      console.log("if körs inte gärna");
      return (
        <div>
          <button onClick={() => this.prevImage()}>BACK</button>
          <button onClick={() => this.nextImage()}>NEXT</button>
          <PageNum property={property} />
        </div>
      );
    }
  }
}

export default slider;

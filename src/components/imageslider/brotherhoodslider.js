import React, { Component } from "react";
import data from "./brotherhooddataslider";
import title from "../pageLayouts/titleColumnLayout";
import PageNum from "./pageNum";
import Button from "../common/button";

class slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: title + data,
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
    // let { property } = this.state;

    let imageIndex = this.state.property.id;
    if (imageIndex == 0) {
      imageIndex = this.state.property.id + `${data.length}` - 1;
    } else {
      imageIndex = this.state.property.id - 1;
    }
    this.setState({
      property: data[imageIndex]
    });
  };

  render() {
    const { property } = this.state;

    return (
      <React.Fragment>
        <div className="brotherhoodslider">
          <Button
            imgclasses="brotherleftarrow"
            buttonTitle="src/img/icons/arrow.svg"
            todo={() => this.prevImage()}
          />

          <Button
            imgclasses="brotherrightarrow"
            buttonTitle="src/img/icons/arrow.svg"
            todo={() => this.nextImage()}
          />
          <PageNum property={property} />
        </div>
      </React.Fragment>
    );
  }
}

export default slider;

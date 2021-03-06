import React, { Component } from "react";
import data from "./mentaldataslider";
import title from "../pageLayouts/titleColumnLayout";
import PageNum from "./pageNum";
import Button from "../common/button";
import { BrowserView, MobileView } from "react-device-detect";

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
    let { property } = this.state;

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
        <div className="mentalslider">
          <BrowserView>
            {" "}
            <Button
              imgclasses="mentalleftarrow"
              buttonTitle="src/img/icons/arrow.svg"
              todo={() => this.prevImage()}
            />
            <Button
              imgclasses="mentalrightarrow"
              buttonTitle="src/img/icons/arrow.svg"
              todo={() => this.nextImage()}
            />
            <PageNum property={property} />
          </BrowserView>
          <MobileView>
            {" "}
            <Button
              imgclasses="mobilementalleftarrow"
              buttonTitle="src/img/icons/arrow.svg"
              todo={() => this.prevImage()}
            />
            <Button
              imgclasses="mobilementalrightarrow"
              buttonTitle="src/img/icons/arrow.svg"
              todo={() => this.nextImage()}
            />
            <PageNum property={property} />
          </MobileView>
        </div>
      </React.Fragment>
    );
  }
}

export default slider;

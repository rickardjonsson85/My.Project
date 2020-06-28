import React from "react";
const pageNum = ({ property }) => {
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
};

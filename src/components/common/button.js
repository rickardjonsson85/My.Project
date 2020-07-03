import React, { Component } from "react";

class Button extends Component {
  handleClick = () => {
    console.log("button clicked");
  };

  render() {
    let { classes, link, imgclasses, buttonTitle, todo, id } = this.props;
    return (
      <a id={id} href={link} className={classes} onClick={todo}>
        <img className={imgclasses} src={buttonTitle} />
      </a>
    );
  }
}

export default Button;

//  <button onClick={() => this.prevImage()}>BACK</button>;

// <button onClick={() => this.nextImage()}>NEXT</button>

import React, { Component } from "react";
import OneColumnLayout from "../pageLayouts/oneColumnLayout";
import Slider from "../imageslider/slider";
import Header from "../common/header";
import Footer from "../common/footer";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <br />
        <OneColumnLayout />;
        <Slider />
        <BrowserView>
          <h1> This is rendered only in browser </h1>
        </BrowserView>
        <MobileView>
          <h1> This is rendered only on mobile </h1>
        </MobileView>
        <OneColumnLayout />
        <Footer />
      </React.Fragment>
    );
  }
}

export default home;

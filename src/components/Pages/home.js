import React, { Component } from "react";
import TitleColumnLayout from "../pageLayouts/titleColumnLayou";
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
        <BrowserView>
          <Header />
          <div className="main">
            <TitleColumnLayout />;
          </div>
          <Slider />
        </BrowserView>
        <MobileView>
          <h1> This is rendered only on mobile </h1>
        </MobileView>
        <Footer />
      </React.Fragment>
    );
  }
}

export default home;

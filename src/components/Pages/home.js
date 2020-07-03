import React, { Component } from "react";
import {
  TitleColumnLayout,
  Sections,
  MobileTitleColumnLayout
} from "../pageLayouts/index";
import { Header, Footer, Headermobile } from "../common/index";
import HomeData from "../pageLayouts/homedata";
import { BrowserView, MobileView } from "react-device-detect";

// if you want to use another title change it "Intrests" to "whateveryouwant"

export const Logo = "src/img/logos/myloggo.png";

class home extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserView>
          {/* Header on this site is the top menu  */}
          <Header />
          {/* The titleColumnlayout is a Columnlayout in browserview : used so there will bee one rotating loggo 
            and a square with rounded corners where te tile will be   */}
          <TitleColumnLayout title="Intrests" />
          {/* The <div className="content"> is the div that cotains the content of the page  */}
          {/* <Slider />  is a carusel containg bouth imagegaes and a div below with some text*/}
          <Sections vals={HomeData} />
        </BrowserView>
        {/* ========== BELOW THIS LINE IS FOR MOBILE VIEW========== */}
        <MobileView>
          <Headermobile />
          <MobileTitleColumnLayout title="Intrests" />
          <Sections vals={HomeData} />
        </MobileView>
        {/* ========== ABOVE THIS LINE IS FOR MOBILE VIEW========== */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default home;

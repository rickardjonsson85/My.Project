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
          {/* Title to specefy the site */}
          <TitleColumnLayout title="intrests" />

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

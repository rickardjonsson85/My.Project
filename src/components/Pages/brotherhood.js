import React, { Component } from "react";
import {
  TitleColumnLayout,
  Sections,
  MobileTitleColumnLayout
} from "../pageLayouts/index";
import { Header, Footer, Headermobile } from "../common/index";
import HomeData from "../pageLayouts/brotherhooddata";
import { BrowserView, MobileView } from "react-device-detect";

export const Logo = "src/img/logos/myloggo.png";

class home extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserView>
          {/* Header on this site is the top menu  */}
          <Header />
          {/* Title to specefy the site */}
          <TitleColumnLayout title="brotherhoods" />
          <Sections vals={HomeData} />
        </BrowserView>
        {/* ========== BELOW THIS LINE IS FOR MOBILE VIEW========== */}
        <MobileView>
          <Headermobile />
          <a href="#">
            <MobileTitleColumnLayout title="Brotherhoods" />
          </a>
          <Sections vals={HomeData} />
        </MobileView>
        {/* ========== ABOVE THIS LINE IS FOR MOBILE VIEW========== */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default home;

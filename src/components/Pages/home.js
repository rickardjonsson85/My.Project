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

// // The const title="intrests" desides the title of the page
// if you want to use another title change it "Intrests" to "whateveryouwant"
export const title = "Intrests";
export const Logo = "src/img/logos/myloggo.png";

class home extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserView>
          {/* Header on this site is the top menu  */}
          <Header />
          {/* <div ClassName="belowheader" is to add a margin-top: 100px; if the header will be higher then 100px the belowheaders  
          margin-top(scss) 
           need to be the same hight aswell */}
          <div className="belowheader">
            {/* The titleColumnlayout is a Columnlayout in browserview : used so there will bee one rotating loggo 
            and a square with rounded corners where te tile will be   */}
            <TitleColumnLayout />;
          </div>
          {/* The <div className="content"> is the div that cotains the content of the page  */}
          <div className="content">
            <div clasname="slidercenter">
              {/* <Slider />  is a carusel containg bouth imagegaes and a div below with some text*/}
              <Slider />
            </div>
          </div>
        </BrowserView>

        {/* ========== BELOW THIS LINE IS FOR MOBILE VIEW========== */}
        <MobileView>
          <h1> This is rendered only on mobile </h1>
        </MobileView>

        {/* ========== ABOVE THIS LINE IS FOR MOBILE VIEW========== */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default home;

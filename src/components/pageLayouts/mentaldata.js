import React from "react";
import Slider from "../imageslider/mentalslider";

const homeData = [
  {
    id: 0,
    title: (
      <div className="mentalbigdiv">
        <h1>
          The Reasons behind mental health is to this day unknown people
          speculate that it has to with finding safty when dangers acure but
          nobuddy knows
        </h1>
      </div>
    ),
    colClass: "col-12"
  },
  {
    id: 1,
    title: (
      <div className="mentalscorediv">
        <h1>Mental Score This Week</h1>
        <h2>9</h2>
      </div>
    ),
    colClass: "col-6"
  },
  {
    id: 2,
    Slider: <Slider />,
    colClass: "col-6"
  }
];

export default homeData;

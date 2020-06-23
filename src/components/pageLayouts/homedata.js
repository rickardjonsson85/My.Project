import React from "react";
import Slider from "../imageslider/slider";

const homeData = [
  {
    id: 0,
    Slider: <Slider />,
    colClass: "col-12"
  },
  {
    id: 1,
    title: "How does it work?",
    body: (
      <p>
        You need to have an account on the site to be able to vote. After making
        an account you vote for the best characters! Coming soon, categories.
        Who is the best girl/boy. Best protagonist aso...
      </p>
    ),
    colClass: "col-6"
  }
];

export default homeData;

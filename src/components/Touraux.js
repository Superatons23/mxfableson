// tour.js

import React from "react";
import JoyRide from "react-joyride";
// Tour steps


const TOUR_STEPS = [
  {
    target: ".About",
    content: "This is where you can search the dashboard."
  },
  {
    target: ".Nav",
    content:
      "Bar chart for total order. You can see beautiful graphs here, thanks to creative tim for such UI."
  },
  {
    target: ".graficas",
    content: "This is where you can find the external links."
  }
];
// Tour component
const Tour = () => {
  return (
    
      <JoyRide steps={TOUR_STEPS} continuous={true}  />
    
  );
};

export default Tour;
import React from "react"
import ReactJoyride from 'react-joyride';
import steps from "./TOUR_STEPS"


const Tour = () => {
    return (
          <ReactJoyride
          steps={steps}
          continuous={true}
          showProgress
          showSkipButton
          styles={{
           options: {
              // modal arrow and background color
              arrowColor: "#eee",
              backgroundColor: "#eee",
              // page overlay color
              overlayColor: "rgba(79, 26, 0, 0.4)",
              //button color
              primaryColor: "mediumaquamarine",
              //text color
              textColor: "#333",
          
              //width of modal
              width: 500,
              //zindex of modal
              zIndex: 1000
          }
      }}
        />
    );
  };
  
export default Tour;
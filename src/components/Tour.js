import React from "react"
import ReactJoyride from 'react-joyride';
import steps from "./TOUR_STEPS"


const Tour = (props) => {

    return (
          <ReactJoyride
          steps={props.stepsP}
          continuous={true}
          showProgress
          showSkipButton
          styles={{
           options: {
              // modal arrow and background color
              arrowColor: "white",
              backgroundColor: "white",
              // page overlay color
              overlayColor: "rgba(0.7, 0.7, 0.7, 0.0)",
              //button color
              primaryColor: "green",
          
              //width of modal
              width: 500,
              //zindex of modal
              zIndex: 5000
          }
      }}
        />
    );
  };
  
export default Tour;
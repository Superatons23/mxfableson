import React from "react";

export default[
    {
        target: ".About",
        content: "Se habla acerca de Fable",
        title: "You can have a title here!",
          styles: {
            //this styles override the styles in the props
            options: {
              textColor: "tomato"
            }
          },
          locale: { 
            next: <span>Next</span>,
          },
          placement: "bottom"
    },
    {
        target: ".imagen",
        content: "Se habla acerca de Fable",
        title: "You can have a title here!",
          styles: {
            //this styles override the styles in the props
            options: {
              textColor: "tomato"
            }
          },
          locale: { 
            next: <span>End Tour</span>,
            back: <span>Back</span>
          },
          placement: "top"

    }
]
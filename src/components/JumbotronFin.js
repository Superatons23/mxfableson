import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import IIASA_LOGO_WHITE from '../assets/IIASA_LOGO_WHITE.png';
import IIASA_LOGO_COLOR from '../assets/IIASA_LOGO.png';
import SDSN_LOGO_WHITE from '../assets/SDSN_LOGO_WHITE.png';
import SDSN_LOGO_COLOR from '../assets/SDSN_LOGO.png';
import FoodAndLand_LOGO_WHITE from '../assets/FoodAndLand_LOGO_WHITE.png';
import FoodAndLand_LOGO_COLOR from '../assets/FoodAndLand_LOGO.png';
import FB_Logo from '../assets/logofb_green.png';
import IG_Logo from '../assets/logoinsta_green.png';
import TW_Logo from '../assets/logotwitter_green.png';

const Styles = styled.div`
  .logo{
      width:250px;
    }

 .socialmedia-logo{
          margin-right:20px;
          width:38px;
        }


    .footer-container{
  overflow:hidden;
    background-color: white;
    padding: 0 13%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin: 0;
    margin-top:25px;
    max-width:100%;
    max-height:100%;
    


  .logo-container{
    margin:0;
    max-width:100%;
    max-height:100%;
    .logo-container-1{
      display:flex;
      margin:0;
    }
    .logo-container-2{
      margin 0;
    }
    
  }


  .contact-container{
    max-width:100%;
    max-height:100%;
    margin-left:70px;
      .email{
        font-size:15px;
        color: #849F47;
      }

      .socialmedia-container{
        display:flex;
        margin-bottom:15px;

      }
      .copyright{
        color:#4E4E4E;
        font-size:20px;
      }
  }
}

  
   `;


const  JumbotronFin = () => {
  return (
    <Styles>
      <div class="footer-container">
        <div class="logo-container">
          <div class="logo-container-1">
            <img class="logo" src={FoodAndLand_LOGO_COLOR} />
            <img class="logo" src={SDSN_LOGO_COLOR} />
          </div>
          <div class="logo-container-2">
            <img class="logo" src={IIASA_LOGO_COLOR} />
          </div>
        </div>

        <div class="contact-container">
          <p class="email">info@foodandlandandusecoalition.org</p>
          <div class="socialmedia-container">
            <a href="https://www.instagram.com/folucoalition/"><img class="socialmedia-logo" src={TW_Logo} /></a>
            <a href="https://www.facebook.com/IIASA"><img class="socialmedia-logo" src={FB_Logo} /></a>
            <a href="https://www.instagram.com/folucoalition/"><img class="socialmedia-logo" src={IG_Logo} /></a>
          </div>
          <p class="copyright">© Copyright 2020 Fable Scenathon. All rights
 reserved. Privacy policy. Web design by Rubisco.</p>
        </div>


      </div>

    </Styles>

  );
};

export default JumbotronFin;
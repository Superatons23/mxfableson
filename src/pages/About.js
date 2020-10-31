import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .bann_{
       color: #4E4E4E;
       top:5;
       text-align: center;
       font-size:20px;
       padding-left: 300px;
       margin-left:80px;
       
    }
    .About{
        background-size: cover;
        background-color: #FFFFF;
        height: 320px;
        position: relative;
        z-index: -2;
        background-color:transparent;
    }
    .about_{
      text-align:left;  
      color: #306973;
      float: left;
      padding-left: 0;
      list-style: none;
      font-size: 75px;
      column-rule: 1px dotted #000;
     
    }
    .overlay{
        background-color: #FFFFF;
        opacity:0.6;
        position: absolute;
        top:0; 
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
    
    .vertical { 
      border-left:  3px  solid;
      height: 250px; 
      color: #306973; 
      left:30%; 
      position:absolute;
      margin-top: -30px;
   }  
    `
    ;

const About = () => {
  return (
    <Styles>
        <Jumbo fluid className= "About">
            <div className= "overlay"></div>
            <Container>
              <li className="about_">Fable</li>
              <div class= "vertical"></div>
            <h1 className = "bann_">
            The Food, Agriculture, Biodiversity, Land-Use, and Energy (FABLE) Consortium is convened as part of the Food and Land-Use Coalition (FOLU). It aims to understand how countries can transition towards sustainable land-use and food systems. In particular, we ask how countries can collectively meet associated Sustainable Development Goals (SDGs) and the objectives of the Paris Agreement. FABLE comprises 20 country teams, which develop data and modelling infrastructure to promote ambitious, integrated strategies towards sustainable land-use and food systems. </h1>
              <br/>

            </Container>
        </Jumbo>
    </Styles>
    
  );
};
export default About;
  
import React from 'react';
import { Jumbotron as Jumbo} from 'react-bootstrap';
import styled from 'styled-components';
import Banner2 from '../assets/banner_2.jpg';

const Styles = styled.div`
   
    .jumbo2{
        background: url(${Banner2});
        background-size: cover;
        color: #ccc;
        position: absoulte;
        margin:0;
        padding:0;
        background-position:center ;
        height:55vh;
        width:100%;
    }
    .overlay{
        background-color: #000;
        opacity:0.6;
        position: absolute;
        top:0;
        left: 0;
        bottom: -5;
        right: 0;
        
    }`;


const Jumbotron2 = () => {
    return(

    <Styles>
        <Jumbo fluid className= "jumbo2">
            <div className= "overlay"></div>
        </Jumbo>
    </Styles>
    )
};

export default Jumbotron2;

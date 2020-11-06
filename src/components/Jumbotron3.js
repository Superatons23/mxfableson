import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Banner3 from '../assets/banner_3.png';

const Styles = styled.div`
   
    .jumbo3{
        background: url(${Banner3});
        background-size: cover;
        color: #ccc;
        position: absoulte;
        margin:0;
        padding:0;
        background-position:center ;
        height:40vh;
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


export default () => {
    return(

    <Styles>
        <Jumbo fluid className= "jumbo3">
            <div className= "overlay"></div>
        </Jumbo>
    </Styles>
    )
};

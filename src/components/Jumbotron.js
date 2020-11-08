import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Banner from '../assets/home.png';

const Styles = styled.div`
    .bann{
       color: white;
       top:5;
       text-align: left;
       font-size:150px;
       text-shadow: 1px .5px 2px #000000;
    }
    .jumbo{
        background: url(${Banner});
        background-size: cover;
        color: #ccc;
        height: 500px;
        position: relative;
        z-index: -2;
    }
    .overlay{
        background-color: #000;
        opacity:0.6;
        position: absolute;
        top:0;
        left: o;
        bottom: -5;
        right: 0;
        z-index: -1;
    }`;


export default (props) => {
    return(
    <Styles ref={props.jumboReference}>
        <Jumbo fluid className= "jumbo">
            <div className= "overlay"></div>
            <Container display="">
                <h3 className = "bann" data-rh="tooltip 1"><i>Fable</i></h3>
                <h3 className = "bann" data-rh="tooltip 1">Scenathon</h3>
            </Container>
        </Jumbo>
    </Styles>
    )
};


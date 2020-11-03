import React from 'react';
import styled from 'styled-components';

const Styles= styled.div`

.about-container{
overflow:hidden;
background-color:transparent;
padding: 10px 10%;
align-items:center;
margin:0;

justify-content:space-between;
margin-bottom:30px;
width:100%;
height: 160px;

.about-title{
    text-align:left;
    color:#306973;
    font-size:35px;
    font-weight: bold;
    margin-bottom:30px;
}

.about-content{
    color: #4E4E4E;
    text-align: justify;
    font-size: 20px;
}
}

`;

const About1=()=>{
return(
<Styles>
<div className="about-container">

</div>


</Styles>


)
};
export default About1;
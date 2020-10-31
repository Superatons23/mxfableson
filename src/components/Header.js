import React from 'react';
import "../css/App.css"
import styled from 'styled-components';
import INCON15 from '../assets/ICONOS-15.png';



const Styles = styled.div`
header{


overflow:hidden;
  background-color: #56C02B;
  color: white;
  padding: 0 1%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-size: 50px;
  margin: 0;


.header-right{
    width:80px;
}


}





`;

export const Header = () => {

    return (
        <Styles>
            <header>
            <div className="header-left">15</div>
                    <div className="header-center">Life on Land</div>
                    <img src={INCON15} class="header-right" alt=""/>
            </header>
        </Styles>


       

    );
};

export default Header;

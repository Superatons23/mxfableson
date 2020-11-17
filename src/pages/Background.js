import BackgroundChart from '../assets/BackgroundCharts.jpg'

import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
.image-background{
  background-color: #000;
  height: 1080px;
  width: 1920px;
}
`;

const Background = () => {
  return (

    <div className="image-background"></div>

  );
};
export default Background;
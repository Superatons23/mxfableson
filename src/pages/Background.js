import BackgroundChart from '../assets/BackgroundCharts.jpg'

import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
.image-background{
    background: url(${BackgroundChart});
}
`;

const Background = () => {
  return (
    
    <image href={BackgroundChart}/>

  );
};
export default Background;
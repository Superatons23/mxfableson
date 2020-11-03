import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
.contenedor selects{
  background-color: #528D93 ;
}
.conetenedor-select {
  color:white;
  &: hover{
    color:#94B046;
  }
}
`;

function dashboardTradeReport (props) {

  
     
        return (
           

            <div className="contenedor-selects">
                <select  name="dashboard-tradeReport" onChange={props.metodo}>
                    <option value="Sustainable_next_exporters">Sustainable-next exporters</option>
                    <option value="Sustainable_next_importers">Sustainable-next importers</option>
                    <option value="Current_trend_next_exporters">Current trend-next exporters</option>
                    <option value="Current_trend_next_importers">Current trend-next importers</option>
                </select>
               
            </div>



        )
    
}
export default dashboardTradeReport;


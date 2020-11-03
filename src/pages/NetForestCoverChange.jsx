import React, { useState} from "react";
import MixedChart from "../components/MixedChart.jsx";
import data from '../data/NetForestCoverChange1.json';
import {Container,Row,Col} from "react-bootstrap";
import Tour from '../components/Tour';

//filter map
//nfch=NetForestCoverChange
const DrawNfch = () => {
  
  const [state, setState] = useState({
    select: {
      GraficaType:'group',
      scenathon_id:'6',
      Iteration:'after',
    }
   
  });

  const handleChange = e => {
  
      setState({
          select: {
              //el next code evitara que se sobrescriba cuando reciba un valor new
              ...state.select,
              
              [e.target.name]: e.target.value
          },
         
      })
      }
  var dataAux=null;

 



  switch(state.select.GraficaType){
    case 'group':
      switch(state.select.Iteration){
        case 'before':
          dataAux= convertir(state.select.scenathon_id  === "6" ? data.combinacion_dos : data.combinacion_cuatro);
          break;
        case 'after':
          dataAux= convertir(state.select.scenathon_id  === "6" ? data.combinacion_uno : data.combinacion_tres);
          break;
          default:dataAux= convertir(data.combination_1);
      }
      break;
    case 'regions':
      switch(state.select.Iteration){
        case 'before':
          dataAux= convertir(state.select.scenathon_id  === "6" ? data.combinacion_seis : data.combinacion_ocho);
          break;
        case 'after':
          dataAux= convertir(state.select.scenathon_id  === "6" ? data.combinacion_cinco : data.combinacion_siete);
          break;
          default:dataAux= convertir(data.combination_1);
      }
      break;
     
    case 'countries':
      switch(state.select.Iteration ){
      case 'before':
        dataAux= convertir(state.select.scenathon_id  === "6" ? data.combinacion_dies : data.combinacion_doce);
        break;
      case 'after':
        dataAux= convertir(state.select.scenathon_id  === "6" ? data.combinacion_nueve : data.combinacion_once);

        break;
        default:dataAux= convertir(data.combination_1);
    }
    break;
    default:dataAux= convertir(data.combination_1);
  }

  const steps = [
    {
      target: ".graph",
      content: "Net Forest Change (loss and gain) describes the sum of all changes in forest area over a specific period of time.",
      title: "Net Forest Change 1",
        styles: {
          //this styles override the styles in the props  
          options: {
            textColor: "black"
          }
        },
        locale: { 
          next: <span>End</span>,
        },
        placement: "top"
    }
  ]


  return <div style={{height: "100vh",width:"70vw"}}>

<Tour stepsP={steps}/>

<div style={{height: "100vh",width:"70vw"}} className="graph">
<MixedChart style={{height: "100vh",width:"70vw"}} data={dataAux}
  title="Net Forest Cover Change"
  aspectRatio={false}
  labelposition="bottom"/>
  </div>
  </div>;
}


const convertir=(props)=> {

  
  var labels=[];
  

  

  var forest_target=[];
  var gfw_deforestation=[]; 
  var forest_loss=[]; 
  var aforestation=[]; 
  var net_forest_change=[]; 
   
  props.forEach(item => {
    forest_target.push(item.forest_target);
    gfw_deforestation.push(item.GFW_deforestation);
    forest_loss.push(item.forest_loss);
    aforestation.push(item.aforestation);
    net_forest_change.push(item.net_forest_change);
    labels.push(item.Year);
    
  });
  const data = {
    labels: labels,  
    datasets: [{
      //net_forest_change <- ejemplo
            label: 'Net forest change',
            type:'scatter',
            data:net_forest_change,
            fill: false,
            backgroundColor: 'Green',
            borderColor: '#71B37C',
            radius: 5,
            hoverBackgroundColor: '#71B37C',
            hoverBorderColor: '#71B37C',
            yAxisID: 'y-axis-1'
          },{
            //net_forest_change <- ejemplo
                  label: 'forest_target',
                  type:'scatter',
                  data:forest_target,
                  fill: false,
                  borderColor: 'Red',
                  backgroundColor: 'Red',
                  radius: 5,
                  pointBorderColor: 'Red',
                  pointBackgroundColor: 'Red',
                  pointHoverBackgroundColor: 'Red',
                  pointHoverBorderColor: 'Red',
                  yAxisID: 'y-axis-1'
                }
          ,
          {
            //GFW deforestation <- ejemplo
                  label: 'GWF deforestation',
                  type:'scatter',
                  data:gfw_deforestation,
                  fill: false,
                  borderColor: 'Black',
                  backgroundColor: 'Black',
                  radius: 7,
                  pointBorderColor: 'Black',
                  pointBackgroundColor: 'Black',
                  pointHoverBackgroundColor: 'Black',
                  pointHoverBorderColor: 'Black',
                  yAxisID: 'y-axis-1'
                },{
            //Aforestation ejemplo
            type: 'bar',
            label: 'Aforestation',
            data: aforestation,
            fill: false,
            backgroundColor: 'rgba(129,199,132, 0.8)',
            borderColor: 'Green',
            borderWidth: 2,
           
            hoverBackgroundColor: 'rgba(129,199,135,0.7)',
            hoverBorderColor: 'Green',
            yAxisID: 'y-axis-1'
          },{
            type: 'bar',
            label: 'Forest loss',
            data: forest_loss,
            fill: false,
            borderColor: '#a98600',
            borderWidth: 2,
            backgroundColor: 'rgba(255,213,79, 0.8)',
            hoverBackgroundColor: 'rgba(255,213,79,0.7)',

            pointBorderColor: '#ffd54f',
            pointBackgroundColor: '#ffd54f',
            pointHoverBackgroundColor: '#ffd54f',
            pointHoverBorderColor: '#EC932F',
            yAxisID: 'y-axis-1'
          },
        
        ]
      };

 return data
} 

 

export default DrawNfch;




import React, { useState, useEffect } from "react";
import MixedChart from "../components/MixedChart.jsx";
import data from '../data/NetForestCoverChange1.json';
import {Container,Row,Col} from "react-bootstrap";
import Tour from '../components/Tour';
import ChartCharacteristics from '../data/ChartCharacteristics.json';
import ComboBox from '../components/ComboBox'
//filter map
//nfch=NetForestCoverChange
const DrawNfch = () => {
  


  function NetForesOne(ChartCharacteristics, data) {
    this.data = data;
    this.type = ChartCharacteristics[0]["type"];
    this.label = ChartCharacteristics[0]["label"];
    this.borderColor = ChartCharacteristics[0]["borderColor"];
    this.backgroundColor = ChartCharacteristics[0]["backgroundColor"];

  }
  function NetForesTarget(ChartCharacteristics, data) {
    this.data = data;
    this.type = ChartCharacteristics[0]["type"];
    this.label = ChartCharacteristics[0]["label"];
    this.fill = ChartCharacteristics[0]["fill"];
    this.radius = ChartCharacteristics[0]["radius"];
    this.borderColor = ChartCharacteristics[0]["borderColor"];
    this.backgroundColor = ChartCharacteristics[0]["backgroundColor"];
    this.pointBorderColor = ChartCharacteristics[0]["pointBorderColor"];
    this.pointBackgroundColor = ChartCharacteristics[0]["pointBackgroundColor"];
    this.pointHoverBackgroundColor = ChartCharacteristics[0]["pointHoverBackgroundColor"];
    this.pointHoverBorderColor = ChartCharacteristics[0]["pointHoverBorderColor"];
    this.yAxisID = ChartCharacteristics[0]["yAxisID"];
   
  }

  const [state, setState] = useState({
    select: {
      GraficaType: 'group',
      scenathon_id: '6',
      Iteration: '4',
    }
  });

  const handleChange = e => {

    var group = state.select.GraficaType;
    var scenathon = state.select.scenathon_id;
    var iteration = state.select.Iteration;
if(e.name === "GraficaType")
{
  group=e.value 
}else if (e.target.name === "scenathon_id") {
      switch (e.target.value) {
        case '6':
          iteration = state.select.Iteration === "1" ? "3" : "4";
          scenathon = "6";
          break;
        case '5':
          scenathon = "5";
          iteration = state.select.Iteration === "3" ? "1" : "2";
          break;
        default: iteration = state.select.Iteration === "1" ? "3" : "4";
      }
    } else {

    
      iteration =scenathon === "6" ? e.target.value === "after" ? "4" : "3" : e.target.value === "after" ? "2" : "1" ;
    }

    setState({
      select: {
        GraficaType: group,
        scenathon_id: scenathon,
        Iteration: iteration,

      }


    });

   
  }

    
      const [json, setJson] = useState([]);
      var dataNetForest = null;
    
      useEffect(() => {
        const getNetForest = async () => {
          try {
    
            const response = await fetch("http://localhost:3456/forestOne" + JSON.stringify(state));
            const jsonAux = await response.json();
      
            setJson(jsonAux);
      
      
          } catch (error) {
            console.error(error)
          }
      
      
      
        }
      
        getNetForest();
    
      }, [state]);
    
      const converter = () => {
        //NetForestChange
        var netForestChange = [];
        //Aforestation
        var aforestation=[];
        //ForestLoss
        var forestLoss=[];
        //GFW_deforestation_global
        var gfw_deforestation_global=[];
        //Forest_target
        var forest_target=[];

        var datasets=[];
        var labels=[];
 


        if (json.length !==0) 
        {

          json.forEach(item => {
            if (!labels.includes(item.Year)) {
              labels.push(item.Year);
            }

            netForestChange.push(item.NetForestChange);
            gfw_deforestation_global.push(item.GFW_deforestation_global);
            forest_target.push(item.Forest_target);


            aforestation.push(item.Aforestation);
            forestLoss.push(item.ForestLoss);



          });
            //targets
            netForest = new NetForesOne(ChartCharacteristics["NetForestChange"],netForestChange);
            datasets.push(netForest);
            netForest = new NetForesOne(ChartCharacteristics["GFW_deforestation_global"],gfw_deforestation_global);
            datasets.push(netForest);
            netForest = new NetForesOne(ChartCharacteristics["Forest_target"],forest_target);
            datasets.push(netForest);

          var netForest = new NetForesOne(ChartCharacteristics["Aforestation"],aforestation);
          datasets.push(netForest);
          netForest = new NetForesOne(ChartCharacteristics["ForestLoss"],forestLoss);
          datasets.push(netForest);

        

          var data = {
            labels:labels,
            datasets:datasets
        };
        dataNetForest=data;

        }
      }


{/* 
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
*/}
  const steps = [
    {
      target: ".graph",
      content: "Net Forest Change (loss and gain) describes the sum of all changes in forest area over a specific period of time.",
      title: "Net Forest Change 1",
        styles: {
          //this styles override the styles in the props  
          options: {
            textColor: "black",
            backgroundColor: '#fff',
          }
        },
        locale: { 
          next: <span>End</span>,
        },
        placement: "top"
    }
  ]


  return <div style={{height: "100vh",width:"70vw"}}>
<div>
<Tour stepsP={steps}/>
<ComboBox onChange={handleChange}/>
{converter()}
</div>


<div style={{height: "100vh",width:"70vw"}} className="graph">
  
<MixedChart style={{height: "100vh",width:"70vw"}} data={dataNetForest}
  title="Net Forest Cover Change"
  aspectRatio={false}
  labelposition="bottom"/>
   
  </div>
  </div>;
}

{/* 
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
            backgroundColor: 'rgba(129,199,132, 1)',
            borderColor: 'Green',
           
            hoverBackgroundColor: 'rgba(129,199,135,1)',
            hoverBorderColor: 'Green',
            yAxisID: 'y-axis-1'
          },{
            type: 'bar',
            label: 'Forest loss',
            data: forest_loss,
            fill: false,
            borderColor: '#a98600',
            
            backgroundColor: 'rgba(255,213,79, 1)',
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
*/}
 

export default DrawNfch;




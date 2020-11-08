import React, { useState, useEffect } from "react";
import SuperGraph from "../components/SuperGraph";
import data from '../data/Greenhouse1.json';
import ComboBox from '../components/ComboBox';
import { Container, Row, Col } from "react-bootstrap";
import Tour from '../components/Tour'
import ChartCharacteristics from '../data/ChartCharacteristics.json';

const DrawGreenhouse1 = (props) => {

  var datasetsGraphOne=[];
  var dataGraphOne=null;
  var dataGraphTwo=null;
  var datasetsGraphTwo = [];

 
  function GreenHouseBartChart(ChartCharacteristics, data) {
    this.data = data;
   
    this.type = ChartCharacteristics[0]["type"];
    this.label = ChartCharacteristics[0]["label"];
    this.borderColor = ChartCharacteristics[0]["borderColor"];
    this.backgroundColor = ChartCharacteristics[0]["backgroundColor"];
    this.yAxisID = ChartCharacteristics[0]["yAxisID"];
  }

  function GreenHouseBartLine(ChartCharacteristics, data) {
    this.data = data;
    this.type = ChartCharacteristics[0]["type"];
    this.label = ChartCharacteristics[0]["label"];
    this.fill = ChartCharacteristics[0]["fill"];
    this.radius = ChartCharacteristics[0]["radius"];
    this.borderColor = ChartCharacteristics[0]["borderColor"];
    this.backgroundColor = ChartCharacteristics[0]["backgroundColor"];
    this.hoverBackgroundColor = ChartCharacteristics[0]["hoverBackgroundColor"];
    this.hoverBorderColor = ChartCharacteristics[0]["hoverBorderColor"];
    this.yAxisID = ChartCharacteristics[0]["yAxisID"];

  }

  function GreenHouseBartScatter(ChartCharacteristics, data) {
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
      GraficaType:'group',
      scenathon_id:'6',
      Iteration:'4',
    }
   
  });
  const [json, setJson] = useState([]);
  var dataChart1 = null;
  var dataChart2 = null;


  useEffect(() => {
    const getGreenHouseOne = async () => {
   

   
      try {
            
      const response = await fetch("http://localhost:3456/gas1"+JSON.stringify(state));
       const  jsonAux =  await response.json();
    
      setJson(jsonAux);
     
  
      } catch (error) {
        console.error(error)
      }
  
  
  
    }
  
    getGreenHouseOne();
    
  }, [state]);



const converter=()=>
{
  //variables chartOne
  var Livestock_CH4=[];
  var Livestock_N20=[];
  var Crop_N20=[];
  var Crop_CH4=[];
  var Crop_CO2=[];
  var Total_GHG_agric=[];
  var FAO_GHGagric=[];
  var ghg_agri_target=[];
//variables chartTwo
var deforestation=[];
var Other_LUC=[];
var sequestration=[];
var peat = [];
var total_GHG_land=[];
var FAO_GHG_LU=[];
var GHG_LU_target=[];
  
  var labels=[];

  if (json.length !==0) 
  {
   
    console.log(json)

    json.forEach(item => {
      if (!labels.includes(item.Year)) 
      {
        labels.push(item.Year);
      }
       //chart one
      Livestock_CH4.push(item.Livestock_CH4);
      Livestock_N20.push(item.Livestock_N20);
      Crop_N20.push(item.Crop_N20);
      Crop_CH4.push(item.Crop_CH4);
      Crop_CO2.push(item.Crop_CO2);

      Total_GHG_agric.push(item.Total_GHG_agric);
      FAO_GHGagric.push(item.FAO_GHGagric);
      ghg_agri_target.push(item.ghg_agri_target);
     //chart TWO
     deforestation.push(item.deforestation)
     Other_LUC.push(item.Other_LUC)
     sequestration.push(item.sequestration)
     peat.push(item.peat)

     total_GHG_land.push(item.total_GHG_land)
     FAO_GHG_LU.push(item.fao_ghg_lu)
     GHG_LU_target.push(item.GHG_LU_target)

    });
    //chart one
   

   

    grenHouse =new  GreenHouseBartScatter(ChartCharacteristics["FAO_GHGagric"],FAO_GHGagric);
    datasetsGraphOne.push(grenHouse);
    grenHouse =new  GreenHouseBartScatter(ChartCharacteristics["ghg_agri_target"],ghg_agri_target);
    datasetsGraphOne.push(grenHouse);

    grenHouse =new  GreenHouseBartLine(ChartCharacteristics["Total_GHG_agric"],Total_GHG_agric);
    datasetsGraphOne.push(grenHouse);

    var grenHouse =new  GreenHouseBartChart(ChartCharacteristics["Livestock_CH4"],Livestock_CH4);
    datasetsGraphOne.push(grenHouse);
    grenHouse =new  GreenHouseBartChart(ChartCharacteristics["Livestock_N20"],Livestock_CH4);
    datasetsGraphOne.push(grenHouse);
    grenHouse =new  GreenHouseBartChart(ChartCharacteristics["Crop_N20"],Livestock_CH4);
    datasetsGraphOne.push(grenHouse);
    grenHouse =new  GreenHouseBartChart(ChartCharacteristics["Crop_CH4"],Livestock_CH4);
    datasetsGraphOne.push(grenHouse);
    grenHouse =new  GreenHouseBartChart(ChartCharacteristics["Crop_CO2"],Livestock_CH4);
    datasetsGraphOne.push(grenHouse);

    //chart two
  

   
    grenHouse =new  GreenHouseBartScatter(ChartCharacteristics["FAO_GHG_LU"],FAO_GHG_LU);
    datasetsGraphTwo.push(grenHouse);
    grenHouse =new  GreenHouseBartScatter(ChartCharacteristics["GHG_LU_target"],GHG_LU_target);
    datasetsGraphTwo.push(grenHouse);

    grenHouse =new  GreenHouseBartLine(ChartCharacteristics["total_GHG_land"],total_GHG_land);
    datasetsGraphTwo.push(grenHouse);


    grenHouse =new  GreenHouseBartChart(ChartCharacteristics["deforestation"],deforestation);
    datasetsGraphTwo.push(grenHouse);
    grenHouse =new  GreenHouseBartChart(ChartCharacteristics["Other_LUC"],Other_LUC);
    datasetsGraphTwo.push(grenHouse);
    grenHouse =new  GreenHouseBartChart(ChartCharacteristics["sequestration"],sequestration);
    datasetsGraphTwo.push(grenHouse);
    grenHouse =new  GreenHouseBartChart(ChartCharacteristics["peat"],peat);
    datasetsGraphTwo.push(grenHouse);





    var dataAux = {
      labels:labels,
      datasets:datasetsGraphOne
  };
  dataGraphOne=dataAux;

 var dataCharTwo = {
    labels:labels,
    datasets:datasetsGraphTwo
};

dataGraphTwo=dataCharTwo;


  }
}






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



  const steps = [
    {
      target: ".graph",
      content: "Computed annual global greenhouse gas emissions from crops and livestock (left), and from land use and peat oxidation (right) in Gt.",
      title: "Greenhouse Gas Emissions 1",
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




  return (
    <Container fluid>
      <Tour stepsP={steps}/>
      <ComboBox onChange={handleChange}/>
      {converter()}
      <div className="graph">
      <Row>
        <Col >
          <div style={{ textAlign: 'center', height: "120vh", width: "30vw" }}>
          

            <SuperGraph data={dataGraphOneAux}
            title="            Annual GHG emissions from cops and livestock in Gt CO2e."
            aspectRatio={false} 
            labelposition="bottom"
            labelwidth={20}
            labelSize={15}
          TitleSize={18}/> 
            </div>
            </Col>
        <Col > 
        <div style={{ textAlign: 'center', height: "120vh", width: "30vw" }}>

          <SuperGraph data={dataGraphTwoAux}
          title="                Average annual GHG emissions from land use change and peat oxidation in Gt CO2e."
          aspectRatio={false} 
            labelposition="bottom" 
            labelwidth={20}
            labelSize={15}
          TitleSize={18}/> 

            </div>
            </Col>
      </Row>
      </div>
    </Container>
 ); 
}

//These are the values of graph one
{/** 
const convertir_data = (props) => {

  var graphTwo_Total_GHG_land = [];
  var graphTwo_Target_GHG_lu = [];
  var graphTwo_FAO_LU_global = [];
  var graphTwo_sequestration = [];
  var graphTwo_other_luc = [];
  var graphTwo_peat = [];
  var graphTwo_deforestation = [];

  var labels = [];

  if (props !== undefined) {

    props.forEach(item => {
      graphTwo_Total_GHG_land.push(item.total_GHG_land);
      graphTwo_Target_GHG_lu.push(item.Target_GHG_LU);
      graphTwo_FAO_LU_global.push(item.FAO_LU_global);
      graphTwo_sequestration.push(item.sequestration);
      graphTwo_other_luc.push(item.other_LUC);
      graphTwo_peat.push(item.peat);
      graphTwo_deforestation.push(item.deforestation);

      labels.push(item.Year);

    });

  }

  const data = {

    labels: labels,
    datasets: [
      {
        type: 'scatter',
        label: 'Target GHG LU',
        data: graphTwo_Target_GHG_lu,
        fill: false,
        borderColor: 'red',
        backgroundColor: 'red',
        pointBorderColor: 'red',
        radius: 5,
        usePointStyle:true,

        pointBackgroundColor: 'red',
        pointHoverBackgroundColor: 'crimson',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'scatter',
        label: 'FAO LU global',
        data: graphTwo_FAO_LU_global,
        fill: false,
        borderColor: 'black',
        backgroundColor: 'black',
        pointBorderColor: 'black',
        radius: 6,
        pointBackgroundColor: 'black',
        pointHoverBackgroundColor: 'grey',
        pointHoverBorderColor: 'grey',
        yAxisID: 'y-axis-1'
      },
      {
        //Aforestation ejemplo
        type: 'line',
        label: 'Total GHG land',
        data: graphTwo_Total_GHG_land,
        fill: false,
        backgroundColor: '#f4511e',
        borderColor: '#f4511e',  
        radius: 8,
    
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-1'
      },
      //asd
      {
        type: 'bar',
        label: 'sequestration',
        data: graphTwo_sequestration,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#64b5f6',
        pointBorderColor: '#EC932F',
        cornerRadius: 8,
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'bar',
        label: 'other LUC',
        data: graphTwo_other_luc,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#ff8f00',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }
      ,
      {
        type: 'bar',
        label: 'peat',
        data: graphTwo_peat,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#ffd54f',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'bar',
        label: 'deforestation',
        data: graphTwo_deforestation,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#4dd0e1',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }


    ]

  };

  return data

}

//These are the values of graph TWO
const convertir = (props) => {

  var total_GHG_agri = [];
  var target_GHG_agri = [];
  var FAO_LU_global = [];
  var livestock_N2O = [];
  var livestock_CH4 = [];
  var crop_CH4 = [];
  var crop_N2O = [];
  var crop_CO2 = [];
  var labels = [];

  if (props !== undefined) {

    props.forEach(item => {
      total_GHG_agri.push(item.Total_GHG_agric);
      target_GHG_agri.push(item.Target_GHG_agri);
      FAO_LU_global.push(item.FAO_Agric_global);
      
      livestock_N2O.push(item.livestock_N2O);
      livestock_CH4.push(item.livestock_CH4);
      crop_CH4.push(item.crop_CH4);
      crop_N2O.push(item.crop_N2O);
      crop_CO2.push(item.crop_CO2);

      labels.push(item.Year);

    });

  }

  const data = {

    labels: labels,
    datasets: [
      {
        type: 'scatter',
        label: 'Target GHG agri',
        data: target_GHG_agri,
        fill: false,
        borderColor: 'red',
        backgroundColor: 'red',
        radius: 7,
        pointBorderColor: '#e64a19',
        pointBackgroundColor: '#e64a19',
        pointHoverBackgroundColor: '#e64a19',
        pointHoverBorderColor: '#e64a19',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'scatter',
        label: 'FAO Agric global',
        data: FAO_LU_global,
        fill: false,
        borderColor: 'black',
        backgroundColor: 'black',
        radius:6,
        pointBorderColor: 'black',
        pointBackgroundColor: 'black',
        pointHoverBackgroundColor: 'grey',
        pointHoverBorderColor: 'grey',
        yAxisID: 'y-axis-1'
      },
      {
        //Aforestation ejemplo
        type: 'line',
        label: 'Total GHG agric',
        data: total_GHG_agri,
        fill: false,
        radius:6,
        backgroundColor: 'grey',
        borderColor: 'grey',
        hoverBackgroundColor: 'grey',
        hoverBorderColor: '#b2ebf2',
        yAxisID: 'y-axis-1'
      },
      //asd
      {
        type: 'bar',
        label: 'livestock N2O',
        data: livestock_N2O,


        fill: false,
        borderColor: '#b2ebf2',
        backgroundColor: '#b2ebf2',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'bar',
        label: 'livestock CH4',
        data: livestock_CH4,

        fill: false,
        borderColor: '#4dd0e1',
        backgroundColor: '#4dd0e1',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }
      ,
      {
        type: 'bar',
        label: 'crop CH4',
        data: crop_CH4,
        fill: false,
        borderColor: '#f10096',
        backgroundColor: '#f10096',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },

      {

        type: 'bar',
        label: 'crop N2O',
        data: crop_N2O,
        fill: false,
        borderColor: '#64b5f6',
        backgroundColor: '#64b5f6',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'bar',
        label: 'crop CO2',
        data: crop_CO2,
        fill: false,
        borderColor: '#0072f0',
        backgroundColor: '#0072f0',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }

    ]

  };

  return data

}
*/}
export default DrawGreenhouse1

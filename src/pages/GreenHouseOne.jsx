import React, { useState} from "react";
import SuperGraph from "../components/SuperGraph";
import data from '../data/Greenhouse1.json';
import ComboBox from '../components/ComboBox';
import { Container, Row, Col } from "react-bootstrap";
const DrawGreenhouse1 = () => {

  var dataGraphOne=null;
  var dataGraphTwo=null;
  var dataGraphOneAux = null;
  var dataGraphTwoAux=null;
 

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

  //Cambiar por las combinaciones de los json falta ya que son dos graficas en el json 
  switch (state.select.GraficaType) {
    case 'group':
      switch (state.select.Iteration) {
        case 'before':
          if (state.select.scenathon_id === "6") {
            dataGraphOne = data.graphOne_combinationTwo;
            dataGraphTwo = data.graphTwo_combinationTwo;
          } else {
            dataGraphOne = data.graphOne_combinationFour;
            dataGraphTwo = data.graphTwo_combinationFour;
          }
           dataGraphOneAux = convertir(dataGraphOne);
           dataGraphTwoAux = convertir_data(dataGraphTwo);
          break;
        case 'after':
          if (state.select.scenathon_id === "6") {
            dataGraphOne = data.graphOne_combinationOne
            dataGraphTwo = data.graphTwo_combinationOne
          } else {
            dataGraphOne = data.graphOne_combinationThree
            dataGraphTwo = data.graphTwo_combinationThree
          }
           dataGraphOneAux = convertir(dataGraphOne);
           dataGraphTwoAux = convertir_data(dataGraphTwo);
          break;
          default:dataGraphOne = data.graphOne_combinationTwo;
          dataGraphTwo = data.graphTwo_combinationTwo;
      }
      break;
    case 'regions':
      switch (state.select.Iteration) {
        case 'before':
          if (state.select.scenathon_id === "6") {
            dataGraphOne = data.graphOne_combinationSix
            dataGraphTwo = data.graphTwo_combinationSix
          } else {
            dataGraphOne = data.graphOne_combinationEight
            dataGraphTwo = data.graphTwo_combinationSeven
          }
           dataGraphOneAux = convertir(dataGraphOne);
           dataGraphTwoAux = convertir_data(dataGraphTwo);
          break;
         
        case 'after':
          if (state.select.scenathon_id === "6") {
            dataGraphOne = data.graphOne_combinationFive
            dataGraphTwo = data.graphTwo_combinationEight
          } else {
            dataGraphOne = data.graphOne_combinationSeven
            dataGraphTwo = data.Greengraph_Two__combination_Seven
          }
           dataGraphOneAux = convertir(dataGraphOne);
           dataGraphTwoAux = convertir_data(dataGraphTwo);
          break;
          default:dataGraphOne = data.graphOne_combinationTwo;
          dataGraphTwo = data.graphTwo_combinationTwo;

      }
      break;
    
    case 'countries':
      switch (state.select.Iteration) {
        case 'before':
          if (state.select.scenathon_id === "6") {
            dataGraphOne = data.graphOne_combinationTen
            dataGraphTwo = data.graphTwo_combinationTen
          } else {
            dataGraphOne = data.graphOne_combinationTwelve
            dataGraphTwo = data.graphTwo_combinationTwelve
          }
           dataGraphOneAux = convertir(dataGraphOne);
           dataGraphTwoAux = convertir_data(dataGraphTwo);
          break;

        case 'after':
          if (state.select.scenathon_id === "6") {
            dataGraphOne = data.graphOne_combinationNine
            dataGraphTwo = data.graphTwo_combinationNine
          } else {
            dataGraphOne = data.graphOne_combinationEleven
            dataGraphTwo = data.graphTwo_combinationEleven
          }
           dataGraphOneAux = convertir(dataGraphOne);
           dataGraphTwoAux = convertir_data(dataGraphTwo);
          break;
          default:dataGraphOne = data.graphOne_combinationTwo;
          dataGraphTwo = data.graphTwo_combinationTwo;
      }
      break;
      default:dataGraphOne = data.graphOne_combinationTwo;
      dataGraphTwo = data.graphTwo_combinationTwo;
  }

  return (
    <Container fluid>
      <Row>
        <Col >
          <div style={{height: "100vh" ,width:"35vw"} }>
          <ComboBox onChange={handleChange}/>
            <SuperGraph data={dataGraphOneAux}
            title="Green House 1"
            aspectRatio={false} 
            labelposition="top"/> 
            </div></Col>
        <Col > <div style={{height: "100vh" ,width:"35vw"} }><SuperGraph data={dataGraphTwoAux}
          title="Green House 2"
          aspectRatio={false} 
            labelposition="top" /> </div></Col>
      </Row>
    </Container>
 ); 
}

//These are the values of graph one
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

export default DrawGreenhouse1
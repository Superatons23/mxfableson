import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";
import ComboBox from '../components/ComboBox';
import { Container, Row, Col } from "react-bootstrap";
import CountryCharacteristics from '../data/CountryCharacteristics.json';
import LeafletMap from './LeafletMap';
//nfch=NetForestCoverChange
const GreenHouse = () => {
  function GreenHouseTwo(ChartCharacteristics,data) {
    this.data=data;
    this.type=ChartCharacteristics[0]["type"];
    this.label=ChartCharacteristics[0]["label"];
    this.borderColor=ChartCharacteristics[0]["borderColor"];
    this.backgroundColor=ChartCharacteristics[0]["backgroundColor"];
    
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
    const getGreenHouseTwo = async () => {
   

   
      try {
            
      

      const response = await fetch("https://fable2020.herokuapp.com/gas2"+JSON.stringify(state));

       const  jsonAux =  await response.json();
    
      setJson(jsonAux);
     
  
      } catch (error) {
        console.error(error)
      }
  
  
  
    }
  
    getGreenHouseTwo();
    
  }, [state]);

  const converter = () => {

    var AgriCO2e=[];
    var LandCO2e=[];
var datasetsChart1=[];
var datasetsChart2=[];
var labels=[];
var countChartOne = 0;
var countChartTwo = 0;

var nameCounty = ""


if (json.length !==0) {
  nameCounty=json[0].name;
  console.log(json)
json.forEach(item => {
  if (!labels.includes(item.Year)) 
  {
    labels.push(item.Year);
  }
 
  if (nameCounty!==item.Country) {
  
    if(countChartOne!==AgriCO2e.length)
    {
      var greenHouseOne = new GreenHouseTwo(CountryCharacteristics[nameCounty], AgriCO2e);
      datasetsChart1.push(greenHouseOne);
    }
    if(countChartTwo!==LandCO2e.length)
    {
    var  greenHouseTwo = new GreenHouseTwo(CountryCharacteristics[nameCounty], LandCO2e);
      datasetsChart2.push(greenHouseTwo);
    }
   
    countChartOne=0;
    countChartTwo=0;
    nameCounty=item.Country;
    LandCO2e=[];
    AgriCO2e=[];
      
  }

  AgriCO2e.push(item.AgriCO2e);
  LandCO2e.push(item.LandCO2e);
  countChartOne = item.AgriCO2e === "0.00"? countChartOne + 1 : countChartOne;
  countChartTwo = item.LandCO2e === "0.00"? countChartTwo + 1 : countChartTwo;
});


}
var dataAux = {
labels:labels,
datasets:datasetsChart1
};

dataChart1=dataAux;
dataAux = {
  labels:labels,
  datasets:datasetsChart2
  };
  dataChart2=dataAux;
  }
  
  





    const handleChange = e => {

      var group = state.select.GraficaType;
      var scenathon = state.select.scenathon_id;
      var iteration = state.select.Iteration;
  
      if (e.target.name === "scenathon_id") {
        switch (e.target.value) {
          case '6':
            iteration = state.select.Iteration === "1" ? "3" : "4";
            scenathon = "6";
            break;
          case '5':
            scenathon = "5";
            iteration = state.select.Iteration === "3" ? "1" : "2";
            break;
            default:iteration = state.select.Iteration === "1" ? "3" : "4";
        }
      } else {
  
        group = e.target.name === "GraficaType" ? e.target.value : state.select.GraficaType;
        iteration = e.target.name === "Iteration" ? scenathon === "6" ? e.target.value === "after" ? "4" : "3" : e.target.value === "after" ? "2" : "1" : state.select.Iteration;
      }
  
      setState({
        select: {
          GraficaType: group,
          scenathon_id: scenathon,
          Iteration: iteration,
  
        }
  
  
      });
  
    }
  
  

  return (
    <Container fluid>
      <Row>
        <Col><div style={{height: "100vh" ,width:"35vw"} }>
        <ComboBox onChange={handleChange}/>
        {converter()}
          
          <BarChart data={dataChart1}
            title="Green House 2" aspectRatio={false}
            labelposition="bottom" />
          
        </div>
        </Col>
        <Col><div style={{height: "100vh" ,width:"35vw"} }>
        
          <BarChart data={dataChart2}
            title="Green House 2" aspectRatio={false}
            labelposition="bottom" />
              
        </div>
        </Col>
      </Row>
 {/* 
      Graph 1
      
      <LeafletMap 
        countriesData = {dataGraphOneAux}
      />
      Graph 2
      <LeafletMap 
        countriesData = {dataGraphTwoAux}
      />
      */}

    </Container>);

}




export default GreenHouse;
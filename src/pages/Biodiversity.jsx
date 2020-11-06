import React, { useState, useEffect } from "react";
import BarChart3 from "../components/BarChart3";

import { Container, Row, Col } from "react-bootstrap";
import LeafletMap from './LeafletMap';
import ComboBox from '../components/ComboBox';

import TradeReportMap from './TradeReportMap'
import CountryCharacteristics from '../data/CountryCharacteristics.json';


//nfch=NetForestCoverChange
const DrawBiodiversity = () => 
{




  function Biodiversity(ChartCharacteristics, data) {
    this.data = data;
    this.type = ChartCharacteristics[0]["type"];
    this.label = ChartCharacteristics[0]["label"];
    this.borderColor = ChartCharacteristics[0]["borderColor"];
    this.backgroundColor = ChartCharacteristics[0]["backgroundColor"];

  }


  const [state, setState] = useState({
    select: {
      GraficaType: 'group',
      scenathon_id: '6',
      Iteration: '4',
    }

  });

  const [json, setJson] = useState([]);
  var data = null;



  useEffect(() => {
    const getBiodiversity = async () => {

      try {
       
      
        const response = await fetch("https://fable2020.herokuapp.com/biodiversity" + JSON.stringify(state));
        const jsonAux = await response.json();
        setJson(jsonAux);
      } catch (error) {
        console.error(error)
      }
    }
    getBiodiversity();
  }, [state]);



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
        default: iteration = state.select.Iteration === "1" ? "3" : "4";
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


  const converter = () => {

    var count = 0;
    var dataBiodiversity_land = [];
    var biodiversities = [];
    var labels = [];
    var nameCountry = ""

    if (json.length !==0) {
      nameCountry=json[0].name;
      json.forEach(item => {
        if (!labels.includes(item.Year)) {
          labels.push(item.Year);
        }
        
        if (nameCountry !== item.Country) {

          if(count!==dataBiodiversity_land.length){
            var biodiversity = new Biodiversity(CountryCharacteristics[nameCountry], dataBiodiversity_land);
            biodiversities.push(biodiversity);
          }
          count = 0;
          nameCountry = item.Country;
          dataBiodiversity_land = [];
       
        }
        dataBiodiversity_land.push(item.Biodiversity_land);
        count = item.Biodiversity_land === "0.00"? count + 1 : count;
      });


    }
    var dataAux = {
      labels: labels,
      datasets: biodiversities
    };
    data = dataAux;
  }


  return (
    <Container fluid >
      <div >
        <ComboBox onChange={handleChange} />
        {converter()}
      </div>
      <Row>
        <Col>

          <div style={{ textAlign: 'center', height: "120vh", width: "35vw" }}>
            <BarChart3 data={data} title="Share of total land which is protected
"
              aspectRatio={false}
              labelString='ha per year'
              fontSize='25'
              labelwidth={50}
              labelSize={16}
              TitleSize={30}
              fontColor='#3a4aab'
              labelposition="bottom" />
          </div>

        </Col>
        <Col>
<br/><br/><br/>
          <div style={{ borderStyle: 'solid', textAlign: 'center', height: "70vh", width: "30vw" }}>
          <TradeReportMap countriesData = {data}/>
          </div>
        </Col>
      </Row>

    </Container>

  );
}
export default DrawBiodiversity;

import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import ComboBox3 from '../components/ComboBox3';
import LeafletMap from './LeafletMap';
import CountryCharacteristics from '../data/CountryCharacteristics.json';
import { css } from "styled-components";

//nfch=NetForestCoverChange
const DrawNfch2 = () => {


  function NetForest(ChartCharacteristics, data) {
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

    const getNetForest = async () => {

      try {

       
        const response = await fetch("https://fable2020.herokuapp.com/forestTwo" + JSON.stringify(state));
        const jsonAux = await response.json();
        setJson(jsonAux);

      } catch (error) {
        console.error(error)
      }
    }
    getNetForest();
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
    var NetForestChange = [];
    var datasetAux = [];
    var labels = [];
    var nameCounty = "";

    if (json.length !==0) {
      
      nameCounty=json[0].name;
      json.forEach(item => {
        if (!labels.includes(item.Year)) {
          labels.push(item.Year);
        }
       
        if (nameCounty !== item.Country) {

          if(count!==NetForestChange.length){

            var netForest = new NetForest(CountryCharacteristics[nameCounty], NetForestChange);
            datasetAux.push(netForest);
          }

          count = 0;
          nameCounty = item.Country;
          NetForestChange = [];

        }
        NetForestChange.push(item.NetForestChange);
        count = item.NetForestChange === "0.00" ? count + 1 : count;

      });


    }
   
    var dataAux = {
      labels: labels,
      datasets: datasetAux
    };
    data = dataAux;
  }

  return (


    <Container fluid >
      <Row>
        <Col >
          <div style={{ height: "100vh", width: "35vw" }}>
            <ComboBox3 onChange={handleChange} />
            {converter()}



            <BarChart data={data}
              title="Net Forest Cover Change 2"
              labelposition="bottom"
              display={true}
              labelString='ha per year'
              fontSize='25'
              aspectRatio={false} />

          </div>
        </Col>
        <Col>

          <div style={{ borderStyle: 'solid', textAlign: 'center', height: "70vh", width: "35vw" }}>
            {/* 
                <LeafletMap
                  countriesData = {dataAux}
                />
  */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default DrawNfch2;
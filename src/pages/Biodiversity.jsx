import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";

import { Container, Row, Col } from "react-bootstrap";
import LeafletMap from './LeafletMap';
import Tour from '../components/Tour';
import ComboBox from '../components/ComboBox';
import CountryCharacteristics from '../data/CountryCharacteristics.json';

//nfch=NetForestCoverChange
const DrawBiodiversity = (props) => {




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
    var nameCounty = ""

    if (json.length !==0) {
      nameCounty=json[0].name;
      json.forEach(item => {
        if (!labels.includes(item.Year)) {
          labels.push(item.Year);
        }
        
        if (nameCounty !== item.Country) {

          if(count!==dataBiodiversity_land.length){
            var biodiversity = new Biodiversity(CountryCharacteristics[nameCounty], dataBiodiversity_land);
            biodiversities.push(biodiversity);
          }
          count = 0;
          nameCounty = item.Country;
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

      

    const steps = [
    {
      target: ".graph",
      content: "Net Forest Change (loss and gain) describes the sum of all changes in forest area over a specific period of time.",
      title: "Net Forest Change Graph",
        styles: {
          //this styles override the styles in the props  
          options: {
            textColor: "black"
          }
        },
        locale: { 
          next: <span>Next</span>,
        },
        placement: "top"
    }
  ]



  return (
    <Container fluid >
      <Tour stepsP={steps}/>
      <div className="graph">
    
                <Row>
                  <Col>
                    <div  style={{height: "100vh", width:"35vw"}}>    
                      <BarChart data={data} title="Biodiversity"/>
                    <div/>
                      <ComboBox onChange={handleChange}/>
                      {converter()}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
    
                    <div style={{height: "100vh", width:"35vw"}}>
                      <BarChart data={data} title="Biodiversity"
                        aspectRatio={false}
                        labelposition="bottom"/>
                    </div>
                  
                  </Col>
                  <Col>
                    <div className="map" style={{borderStyle:'solid', textAlign:'center', height: "70vh",width:"35vw"}}>
                      <LeafletMap countriesData = {data}/>              
                    </div>
                  </Col>
                </Row>
                {/*<LeafletMap
                  
                  
                  countriesData = {dataAux}
                  
                />*/}
    
      </div>
    </Container>
              
    );
    }

export default DrawBiodiversity;




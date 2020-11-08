import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";
import {Container,Row,Col} from "react-bootstrap";
import ComboBoxTradeReportersImporters from "../components/ComboBoxTradeReporters";
import CountryCharacteristics from '../data/CountryCharacteristics.json';

import TradeReportMap from './TradeReportMap'

const SustainableExporter =()=>
{
    function Pais(CountryCharacteristics,data) 
    {
      this.data=data;
      this.type=CountryCharacteristics[0]["type"];
      this.label=CountryCharacteristics[0]["label"];
      this.borderColor=CountryCharacteristics[0]["borderColor"];
      this.backgroundColor=CountryCharacteristics[0]["backgroundColor"];
      
    }
    const [state,setState]=useState({select: {
        Product: 'abaca',
       iteration: "2",
       column:"Import_quantity",
       scenathon_id:"5"
       }});


       //const [state,setState]=useState([]);
 const [json,setJson]=useState([]);
 var dataAux = null;

 const handleChange = e => {
    var  iteration = e.target.name==="iteration"? e.target.value==="after"?'2':'1':state.select.iteration;
   
    console.log(iteration)
 setState({
         select: {
           
             ...state.select,
             
             [e.target.name]: e.target.value,
             iteration:iteration
         }
        
     }) 
 
  }

  useEffect(() => {
    const getNetSustainableImporter = async() => {
      try {
     
      const response = await fetch("https://fable2020.herokuapp.com/net" + JSON.stringify(state));  
      const  jsonAux =  await response.json();
      console.log(jsonAux);
      setJson(jsonAux);
  
      } catch (error) {
        console.error(error)
      }
  
  
  
    }
  
    getNetSustainableImporter();
  }, [state]);

 

  const converter=()=>
  {
    
  var dataImport_quantity=[];
  var count = 0;
  var paises=[];
  var labels=[];
  var nameCounty="";
  
    if (json.length !==0) {
      nameCounty = json[0].name;
      json.forEach(item => {
        if (!labels.includes(item.Year)) 
        {
          labels.push(item.Year);
        }
    
        if (nameCounty!==item.name) {
          if (count !== dataImport_quantity.length) {
            var pais = new Pais(CountryCharacteristics[nameCounty], dataImport_quantity);
            paises.push(pais);

          }
          count = 0;
          nameCounty=item.name;
          dataImport_quantity=[];
 
        }
        dataImport_quantity.push(item.Import_quantity);
        count = item.Import_quantity === "0.00" ? count + 1 : count;
      });
  
  
    }
   var data = {
      labels:labels,
      datasets:paises
  };
   dataAux=data;
  }

  return (
    <Container fluid >
    <div >
    <ComboBoxTradeReportersImporters metodo={handleChange} />
        {converter()}
        </div>
                <Row  >
                  <Col>
                  
                  <div style={{height: "100vh", width:"35vw"}}>
                      <BarChart data={dataAux} title="Current trend net Importers"
                                                                              labelString='Import quantity'

                        aspectRatio={false}
                        labelposition="bottom"/> 
                  </div>
                  
                  </Col>
                  <Col>
                  <br/><br/>
                  <div style={{borderStyle:'solid', textAlign:'center', height: "70vh",width:"30vw"}}>
                  <TradeReportMap countriesData = {dataAux}/>
                 
                  </div>
                  </Col>
                </Row>
               
              </Container>    
                    
    );

}
export default SustainableExporter;
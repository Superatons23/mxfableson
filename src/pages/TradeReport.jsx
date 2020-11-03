import React, { useState, useEffect } from "react";
import {Container,Row,Col} from "react-bootstrap";
import LeafletMap from './TradeReportMap'


import ComboBoxTradeReportersImporters from "../components/ComboBoxTradeReporters";
import CountryCharacteristics from '../data/CountryCharacteristics.json';
import DashboardTradeReport from '../components/DashboardTradeReport'

import BarChart from "../components/BarChart";
import TradeReportMap from "./TradeReportMap";
const SustainableImporters = () =>{
  
  const [state,setState]=useState({select: {
  Product: 'abaca',
 iteration: "4",
 scenathon_id :"6",
 column:"Export_quantity"
 }});

  //const [state,setState]=useState([]);
  const [json,setJson]=useState([]);
  var dataAux = null;

 const handleChange = e => {
var scenathon_id=state.select.scenathon_id;
var columnAux=state.select.column;
var Product =state.select.Product;
var iteration=state.select.iteration;

 
  if(e.target.name=="dashboard-tradeReport"){
  switch (e.target.value) {
    case 'Sustainable_next_exporters':
       // this.dash = <SustainableImporters scenathon_id={"6"} column={"Export_quantity"} iteration={"4"}/>;
       scenathon_id="6";
       columnAux="Export_quantity";
      iteration=state.select.iteration=="1"? "3":"4";
       
        break;
    case 'Sustainable_next_importers':
     //   this.dash = <SustainableImporters scenathon_id={"5"} column={"Import_quantity"} iteration={"4"}/>;
     scenathon_id="6";
     columnAux="Import_quantity";
     iteration=state.select.iteration=="1"? "3":"4";
        break;
    case 'Current_trend_next_exporters':
      //  this.dash = <h1>Current_trend_next_exporters</h1>
      scenathon_id="5";
      columnAux="Export_quantity";
     iteration=state.select.iteration=="3"? "1":"2";
//iteration="2";
        break;
    case 'Current_trend_next_importers':
      scenathon_id="5";
      columnAux="Import_quantity";
      iteration=state.select.iteration=="3"? "1":"2";
      //  this.dash = <h1>Current_trend_next_importers</h1>
        break;

        
}
}else{
  
  Product= e.target.name=="Product"? e.target.value: state.select.Product;
  iteration=e.target.name=="iteration"?scenathon_id==="6" ? e.target.value==="after"? "4":"3" : e.target.value==="after"? "2":"1":state.select.iteration;
}

setState({
      select: {
        Product: Product,
        iteration: iteration,
        scenathon_id :scenathon_id,
        column:columnAux
        
      }

});



  }

  

  useEffect(() => 
  {
    
  getNettrade();
  }, [state]);

 
//llamada a la base de datos
  const getNettrade = async() => {
    try {
   
      const body =state;
      
   
     const response = await fetch("http://localhost:5000/net/"+JSON.stringify(body));
      const  jsonAux =  await response.json();
    
    setJson(jsonAux);

    } catch (error) {
      console.error(error)
    }



  }

  function Pais(CountryCharacteristics,data) {
    this.data=data;
    this.type=CountryCharacteristics[0]["type"];
    this.label=CountryCharacteristics[0]["label"];
    this.borderColor=CountryCharacteristics[0]["borderColor"];
    this.backgroundColor=CountryCharacteristics[0]["backgroundColor"];
    
  }

const getImportQuantity=()=>
{
  
var dataImport_quantity=[];
var paises=[];
var labels=[];
var nameCounty="Argentina";

  if (json != null) {
    json.map((item) => {
      if (!labels.includes(item.Year)) 
      {
        labels.push(item.Year);
      }
      dataImport_quantity.push(item.Import_quantity);
      if (nameCounty!=item.name) {
        var pais = new Pais(CountryCharacteristics[nameCounty], dataImport_quantity);
        paises.push(pais);
        nameCounty=item.name;
        dataImport_quantity=[];
        dataImport_quantity.push(item.Import_quantity);
      }
    });


  }
 var data = {
    labels:labels,
    datasets:paises
};
 dataAux=data;
}

const getExportQuantity=()=>
{
 
var dataExport_quantity=[];
var paises=[];
var labels=[];
var nameCounty="Argentina";
  if (json != null) {
    json.map((item) => {
      if (!labels.includes(item.Year)) 
      {
        labels.push(item.Year);
      }
      dataExport_quantity.push(item.Export_quantity);
      if (nameCounty!=item.name) {
        var pais = new Pais(CountryCharacteristics[nameCounty], dataExport_quantity);
          paises.push(pais);
          nameCounty=item.name;
          dataExport_quantity=[];
          dataExport_quantity.push(item.Export_quantity);
      }
    });


  }
 var data = {
    labels:labels,
    datasets:paises
};
 dataAux=data;
}



const converter=()=>{


if(state.select.column=="Export_quantity")
{
  getExportQuantity();
}else{
 
  getImportQuantity();
}

  }   

 
    return (
      <div>
        {converter()}
       
        <div>
           <ComboBoxTradeReportersImporters metodo={handleChange} />
        
        </div>

        {/*this.selectDashboard()*/}
       
<div>


        <Container fluid>
                <Row >
                  <Col>
                  <div style={{height: "75vh" ,width:"70vw"} }>
                  <BarChart data={dataAux} title="Sustainable - net exporters" 
                        aspectRatio={false}
                        labelposition="bottom"/> 
                  </div>
                  </Col>
                  <Col>
                  <div style={{borderStyle:'solid', textAlign:'center', height: "75vh"}}>
                  <TradeReportMap countriesData={dataAux}/>
                  </div>
                  </Col>
                </Row>
                <TradeReportMap countriesData={dataAux}/>
              </Container>
              </div>
      </div>
    )
  
}



export default SustainableImporters;

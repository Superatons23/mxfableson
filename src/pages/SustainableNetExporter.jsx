import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";
import {Container,Row,Col} from "react-bootstrap";
import ComboBoxTradeReportersImporters from "../components/ComboBoxTradeReporters";
import CountryCharacteristics from '../data/CountryCharacteristics.json';

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
       iteration: "4",
       column:"Export_quantity",
       scenathon_id:"6"
       }});



 //const [state,setState]=useState([]);
 const [json,setJson]=useState([]);
 var dataAux = null;

 const handleChange = e => {
   var  iteration = e.target.name==="iteration"? e.target.value==="after"?'4':'3':state.select.iteration;
   console.log("hande")
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
  const getNettrade = async() => {
    try {
    // const response = await fetch("https://server-fableson.wl.r.appspot.com/net"+JSON.stringify(body));
    const response = await fetch("https://fable2020.herokuapp.com/net"+JSON.stringify(state));
    const  jsonAux =  await response.json();
    
    setJson(jsonAux);

    } catch (error) {
      console.error(error)
    }



  }
    getNettrade();
  }, [state]);




  const converter=()=>
{
 
var dataExport_quantity=[];
var count = 0;
var paises=[];
var labels=[];
var nameCounty="";
  if (json.length !==0) {
    nameCounty=json[0].name;
    json.forEach(item => {
      if (!labels.includes(item.Year)) 
      {
        labels.push(item.Year);
      }
      
      if (nameCounty!==item.name) {
      
        if(count!==dataExport_quantity.length){
        var pais = new Pais(CountryCharacteristics[nameCounty], dataExport_quantity);
          paises.push(pais);
        }
        count = 0;
          nameCounty=item.name;
          dataExport_quantity=[];
         
      }
      dataExport_quantity.push(item.Export_quantity);
      count = item.Export_quantity === "0.00" ? count + 1 : count;
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
                      <BarChart data={dataAux} title="Sustainable net exporters"
                                  labelString='Export quantity'

                        aspectRatio={false}
                        labelposition="bottom"/> 
                  </div>
                  
                  </Col>
                  <Col>
    
                  <div style={{borderStyle:'solid', textAlign:'center', height: "70vh",width:"35vw"}}>
                  
                  {/* 
                  <LeafletMap
                  
    
                 //   countriesData = {dataAux}
                  
                  />
                  */}
                  </div>
                  </Col>
                </Row>
                {/* 
                <LeafletMap
                  
                    
                   // countriesData = {dataAux}
                  
                  />
                  */}
              </Container>          
    );
}

export default SustainableExporter;
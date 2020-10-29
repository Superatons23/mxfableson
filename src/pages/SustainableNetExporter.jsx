import React, { useState, useEffect } from "react";
import BarChart from "../componentes/BarChart";
import {Container,Row,Col} from "react-bootstrap";
import ComboBoxTradeReportersImporters from "../componentes/ComboBoxTradeReporters";
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
   var  iteration = e.target.name=="iteration"? e.target.value=="after"?'4':'3':state.select.iteration;
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
    getNettrade();
  }, [state]);

//llamada a la base de datos
const getNettrade = async() => {
    try {
   console.log("net")
      const body =state;
      console.log(body)
      
   
     const response = await fetch("http://localhost:5000/net/"+JSON.stringify(body));
      const  jsonAux =  await response.json();
    
    setJson(jsonAux);

    } catch (error) {
      console.error(error)
    }



  }

  const converter=()=>
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
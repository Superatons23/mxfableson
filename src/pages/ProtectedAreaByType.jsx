import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart.jsx";
import ComboBox2 from '../components/ComboBox2'
import ChartCharacteristics from '../data/ChartCharacteristics.json';
import ComboBox from '../components/ComboBox'

import Tour from '../components/Tour'
const DrawProtected = () => {


  function Area(ChartCharacteristics, data) {
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
    const getProtectedAreaByType = async () => {
      try {

        const response = await fetch("https://fable2020.herokuapp.com/protected" + JSON.stringify(state));
        const jsonAux = await response.json();
  
        setJson(jsonAux);
  
  
      } catch (error) {
        console.error(error)
      }
  
  
  
    }
  
    getProtectedAreaByType();

  }, [state]);


  const converter = () => {


    var labels = [];
    var areaForest = [];
    var areaOther = [];
    var areaOtherNta = [];
    var areas = [];
    if (json.length !==0) 
    {
     
      json.forEach(item => {
        if (!labels.includes(item.Year)) {
              labels.push(item.Year);
            }

            areaForest.push(item.ProtectedAreasForest);
            areaOther.push(item.ProtectedAreasOther);
            areaOtherNta.push(item.ProtectedAreasOtherNat);

          });

 
          var area = new Area(ChartCharacteristics["ProtectedAreasForest"],areaForest);
          areas.push(area);
           area = new Area(ChartCharacteristics["ProtectedAreasOther"],areaOther);
          areas.push(area);
           area = new Area(ChartCharacteristics["ProtectedAreasOtherNat"],areaOtherNta);
          areas.push(area);

         var dataAux = {
            labels:labels,
            datasets:areas
        };
        data=dataAux;
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
        content: "Different types of protected areas and their extension.",
        title: "Protected Area By Type",
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

      <div className="graph" style={{height: "100vh",width:"70vw"}}>
      <Tour stepsP={steps}/>
      
      <ComboBox onChange={handleChange}/>
     {converter()}
      

      <BarChart data={data}
        labelString='ha per year'
        fontSize='25'
        labelposition="bottom"
        labelwidth={50}
        labelSize={16}

      
    title="Protected Areas By Type"/>
    
    </div>
    )
  }

  export default DrawProtected;

import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";
import ComboBox from '../components/ComboBox';
import ChartCharacteristics from '../data/ChartCharacteristics.json';


const DrawFreshWaterUse = () => {




  function FreshWaterUse(ChartCharacteristics, data) {
    this.data = data;
    this.type = ChartCharacteristics[0]["type"];
    this.label = ChartCharacteristics[0]["label"];
    this.borderColor = ChartCharacteristics[0]["borderColor"];
    this.backgroundColor = ChartCharacteristics[0]["backgroundColor"];

  }
  const [json, setJson] = useState([]);
  var data = null;

  const [state, setState] = useState({
    select: {
      GraficaType: 'group',
      scenathon_id: '6',
      Iteration: '4',
    }

  });

  useEffect(() => {
    const getFreshWater = async () => {

      try {
       
       
        const response = await fetch("https://fable2020.herokuapp.com/freshwater1"+JSON.stringify(state));
        
        const jsonAux = await response.json();
        setJson(jsonAux);
      } catch (error) {
        console.error(error)
      }
    }

    getFreshWater();
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


  const converter = () => {


    var labels = [];
    var blueWater = [];


    var dataSet = []


    if (json !== null) {

      json.forEach(item => {
        labels.push(item.Year);
        blueWater.push(item.BlueWater);

      });

      var freshWaterUse = new FreshWaterUse(ChartCharacteristics["cubic_metres"], blueWater);
      dataSet.push(freshWaterUse);

      var dataAux = {
        labels: labels,
        datasets: dataSet
      };
      data = dataAux;


    }

  }





  return (
    <div>
<div>
<ComboBox onChange={handleChange}/>
{converter()}
</div>
   
  <div style={{height: "100vh",width:"70vw"}}>
   
    <BarChart data={data}
  aspectRatio={false}
  labelposition="bottom"
  labelwidth={50}
  labelSize={24}
  labelString='Blue water cubic metres'
  fontSize='24'
  TitleSize={55}



  title="Fresh Water use"/>
  
  </div>
  </div>
  );
}
export default DrawFreshWaterUse;
import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart.jsx";
import ComboBox from '../components/ComboBox';
import ChartCharacteristics from '../data/ChartCharacteristics.json';
const DrawLandCover = () => {




  function LanCover(ChartCharacteristics,data) {
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
  var data = null;

  useEffect(() => {
    const getLandCover = async () => 
    {
      try {   
        const body =state;
       const response = await fetch("https://server-fableson.wl.r.appspot.com/landcover"+JSON.stringify(body));
       const  jsonAux =  await response.json();
      setJson(jsonAux);
      } catch (error) {
        console.error(error)
      }
    }
    getLandCover();
  }, [state]);





  const converter = () => 
  {
    var labels=[];
    var calcPasture=[];
    var calcCropland=[];
    var calcForest=[];
    var calcNewForest=[];
    var calcOtherLand=[];
    var calcUrban=[];
    var dataSet=[];

    console.log(json);
    if (json !== null ) {
   
      json.forEach(item => {
          labels.push(item.Year);
          calcPasture.push(item.CalcPasture);
          calcCropland.push(item.CalcCropland);
          calcForest.push(item.CalcForest);
          calcNewForest.push(item.CalcNewForest);
          calcOtherLand.push(item.CalcOtherLand);
          calcUrban.push(item.CalcUrban);
        
      });

      var landCover = new LanCover(ChartCharacteristics["calcPasture"],calcPasture);
      dataSet.push(landCover);
       landCover = new LanCover(ChartCharacteristics["calcCropland"],calcCropland);
      dataSet.push(landCover);
      landCover = new LanCover(ChartCharacteristics["calcForest"],calcForest);
      dataSet.push(landCover);
      landCover = new LanCover(ChartCharacteristics["calcNewForest"],calcNewForest);
      dataSet.push(landCover);
      landCover = new LanCover(ChartCharacteristics["calcOtherLand"],calcOtherLand);
      dataSet.push(landCover);
      landCover = new LanCover(ChartCharacteristics["calcUrban"],calcUrban);
      dataSet.push(landCover);
 
 
      var dataAux = {
        labels:labels,
        datasets:dataSet
    };
    data=dataAux;
    }
  }


  const handleChange = e => {
  
    var group = state.select.GraficaType;
    var scenathon = state.select.scenathon_id;
    var iteration = state.select.Iteration;
    
    if(e.target.name==="scenathon_id"){
      switch (e.target.value) {
        case '6':
          iteration=state.select.Iteration==="1"? "3":"4";
          scenathon="6";
            break;
        case '5':
         scenathon="5";
         iteration=state.select.Iteration==="3"? "1":"2";
            break;   
            default:  iteration=state.select.Iteration==="1"? "3":"4";  
    }
    }else{
     
      group= e.target.name==="GraficaType"? e.target.value: state.select.GraficaType;
      iteration=e.target.name==="Iteration"?scenathon==="6" ? e.target.value==="after"? "4":"3" : e.target.value==="after"? "2":"1":state.select.Iteration;
    }
    
    setState({
      select: {
        GraficaType: group,
        scenathon_id:scenathon,
        Iteration:iteration,
    
        }
    
     
    });
    
      }
    




    return (
     <div>

    <div >
    <ComboBox onChange={handleChange}/>
    {converter()}
    </div>

    <div style={{height: "100vh",width:"70vw"}}>
    <BarChart data={data}
    labelwidth={40}
    labelSize={24}
    title="Land Cover"
    labelposition='right'
    labelString='Ha per year'
    fontSize='20'
    fontColor='black'
   aspectRatio={false}/>
    </div>

   </div>
    )
  }
  

  export default DrawLandCover;

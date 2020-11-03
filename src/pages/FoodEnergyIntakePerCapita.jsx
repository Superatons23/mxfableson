import React, { useState, useEffect } from "react";
import MixedChart from "../components/MixedChart.jsx";
import ChartCharacteristics from '../data/ChartCharacteristics.json';
import ComboBox2 from "../components/ComboBox2.jsx";
import Tour from "../components/Tour.js";
const FoodEnergyIntakePerCapita = (props) => {

  function Food(ChartCharacteristics,data) {
    this.data=data;
    this.type=ChartCharacteristics[0]["type"];
    this.label=ChartCharacteristics[0]["label"];
    this.borderColor=ChartCharacteristics[0]["borderColor"];
    this.backgroundColor=ChartCharacteristics[0]["backgroundColor"];
    this.radius=ChartCharacteristics[0]["radius"];
  }

  const [state, setState] = useState({
    select: {
      Year: '2000',
      scenathon_id: '6',
      Iteration: '4',
    }
   
  });

  const [json, setJson] = useState([]);
  var data = null;
  useEffect(() => {
 
    const getFoodEnergyIntakePerCapita = async () => {
      try {   
        const body =state;

      const response = await fetch("https://fable2020.herokuapp.com/foodenergy1"+JSON.stringify(body));
   
       const  jsonAux =  await response.json();
      setJson(jsonAux);
      } catch (error) {
        console.error(error)
      }

    }
    getFoodEnergyIntakePerCapita();
  }, [state]);


const handleChange = e => {
  var year = state.select.Year;
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
  }
  else{ 
    year= e.target.name==="Year"? e.target.value: state.select.Year;
    iteration=e.target.name==="Iteration"?scenathon==="6" ? e.target.value==="after"? "4":"3" : e.target.value==="after"? "2":"1":state.select.Iteration;
  }
  setState({
    select: {
      Year: year,
      scenathon_id:scenathon,
      Iteration:iteration,
    }
  });
}


  const converter = () => {
  

    var labels=[];
    var target_mder=[];

    var kcal_feasible=[];
    var dataSet=[]


    if (json !== null ) {
   
      json.forEach(item => {
          labels.push(item.Country);
          target_mder.push(item.Target_MDER);

          kcal_feasible.push(item.Kcal_feasible);
        
      });

      var food = new Food(ChartCharacteristics["target_mder"],target_mder);
      dataSet.push(food);
      food = new Food(ChartCharacteristics["kcal_feasible"],kcal_feasible);
      dataSet.push(food);

      var dataAux = {
        labels:labels,
        datasets:dataSet

    };
    data=dataAux;
  }
}
    const steps = [
      {
        target: ".graph",
        content: "Energy intake and the minimum dietary energy requirement (MDER) per capita, in kilocalories per day.",
        title: "Food energy intake per capita 1",
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

    <div>
      
      <div>
        <ComboBox2 onChange={handleChange} />
        {converter()}
      </div>

      <Tour stepsP={steps}/>
    <div className="graph" style={{height: "100vh" ,width:"70vw"} }>
      <MixedChart data={data}
    aspectRatio={false}
    labelposition="top"
    labelwidth={40}
    labelSize={20}
    TitleSize={30}
    labelString='Energy intake per capita'

    title="Food energy intake per capita"/>
    </div>
  
    </div>
  )


}
export default FoodEnergyIntakePerCapita;


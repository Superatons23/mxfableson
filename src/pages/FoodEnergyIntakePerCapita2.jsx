import React, { useState, useEffect } from "react";
import BarChart2 from "../components/BarChart2.jsx";
import ChartCharacteristics from '../data/ChartCharacteristics.json';
import ComboBoxFoodEnergy2 from "../components/ComboBoxFoodEnergy2.jsx";
const FoodEnergyIntakePerCapita = () => {

  function Food(ChartCharacteristics,data) {
    this.data=data;
    this.type=ChartCharacteristics[0]["type"];
    this.label=ChartCharacteristics[0]["label"];
    this.borderColor=ChartCharacteristics[0]["borderColor"];
    this.backgroundColor=ChartCharacteristics[0]["backgroundColor"];
    
  }

  const [state, setState] = useState({
    select: {
      Year: '2000',
      Iteration: '4',
    }
   
  });

  const [json, setJson] = useState([]);

  var data = null;




  useEffect(() => {
    const getFoodEnergyIntakePerCapita = async () => {
   

   
      try {
            
        const body =state;
      
        
       const response = await fetch("https://server-fableson.wl.r.appspot.com/foodenergy2"+JSON.stringify(body));
       const  jsonAux =  await response.json();
    
      setJson(jsonAux);
     
  
      } catch (error) {
        console.error(error)
      }
  
  
  
    }
  
    getFoodEnergyIntakePerCapita();
    
  }, [state]);








  const handleChange = e => {


setState({
  select: {
    ...state.select,
    [e.target.name]: e.target.value
    }

 
});

  }

  const converter = () => {
  

    var labels=[];
    var Protein_feasible=[];
    var Fat_feasible=[];
    var dataSet=[]


    if (json != null ) {
   
      json.forEach(item => {
          labels.push(item.Country);
          Protein_feasible.push(item.Protein_feasible);
          Fat_feasible.push(item.Fat_feasible);
        
      });

      var food = new Food(ChartCharacteristics["Protein_feasible"],Protein_feasible);
      dataSet.push(food);
      food = new Food(ChartCharacteristics["Fat_feasible"],Fat_feasible);
      dataSet.push(food);

      var dataAux = {
        labels:labels,
        datasets:dataSet
    };
    data=dataAux;


    }
  
  }
 
  return (

    <div>
      
      <div>
        <ComboBoxFoodEnergy2 onChange={handleChange} />
        {converter()}
      </div>

      
    <div  style={{height: "100vh" ,width:"70vw"} }>
      <BarChart2 data={data}
    aspectRatio={false}
    labelposition="top"
    labelwidth={50}
    labelSize={24}
    TitleSize={45}
    labelString='Energy intake per capita'

    title="Food energy intake per capita"/>
    </div>
  
    </div>
  )


}
export default FoodEnergyIntakePerCapita;


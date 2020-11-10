import React from 'react';

import '../css/ComboBox.css';


function ComboBoxFoodEnergy2 (props) {

    
        const{onChange}=props;
      
        return (
           

            <div className="contenedor-selects">
                <br></br>
                <select   class="selectBox" name="scenathon_id" onChange={onChange}>
                <option value="" disabled selected hidden>Scenario</option>
                <option  value="6">Sustainable</option>
                   
                    
                </select>
                <br></br>
                <select  class="selectBox" name="Iteration" onChange={onChange}>
                <option value="" disabled selected hidden>Trade Adjustment</option>
                <option value="4">After Iteration</option>
                    <option   value="3">Before Iteration</option>
                </select>
                <br></br>
                 <select  class="selectBox" name="Year" onChange={onChange}>
                 <option value="" disabled selected hidden>Year</option>
                    <option  value="2000">2000</option>
                    <option  value="2005">2005</option>
                    <option value="2010">2010</option>
                    <option  value="2015">2015</option>
                    <option  value="2020">2020</option>
                    <option  value="2025">2025</option>
                    <option  value="2030">2030</option>
                    <option  value="2035">2035</option>
                    <option value="2040">2040</option>
                    <option  value="2045">2045</option>
                    <option  value="2050">2050</option>

                </select>
                <br></br>
               
            </div>
  


        )
    
}
export default ComboBoxFoodEnergy2;


import React from 'react';

import { Form } from 'react-bootstrap';
import '../css/ComboBox.css';



function ComboBox (props) {

    
        const{onChange}=props
        return (
           

            <div className="contenedor-selects">
                <br></br>
                <Form>
                  <select class="selectBox" name="Scenario" onChange={onChange} >
                    <option class="selectOption" value="6">Sustainaible</option>
                    <option  class="selectOption" value="5">Current trend</option>
                  </select>
                </Form>

             
                <br></br>
                <Form>
                  <select  class="selectBox" name="Iteration" onChange={onChange} >
                    <option class="selectOption" value="after">after</option>
                    <option class="selectOption" value="before">before</option>
                  </select>
                </Form>

              
                <br></br>
                <Form>
                  <select  class="selectBox"name="GraficaType" onChange={onChange} >
                    <option class="selectOption"value="regions">ALL ROW regions</option>
                    <option  class="selectOption" value="countries">ALL FABLE countries</option>
                  </select>
                </Form>

               
                <br></br>
            </div>


        )
    
}
export default ComboBox;


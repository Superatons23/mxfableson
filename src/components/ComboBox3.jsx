import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import '../css/ComboBox.css';



function ComboBox (props) {

    
        const{onChange}=props
        return (
           

            <div className="contenedor-selects">
                <br></br>
                <Form>
                  <select class="selectBox" name="Scenario" onChange={onChange} >
                    <option class="selectOption" value="Sustainaible">Sustainaible</option>
                    <option  class="selectOption" value="Current_trend">Current trend</option>
                  </select>
                </Form>

               {/*<select  name="Scenario" onChange={onChange}>
                    <option value="Sustainaible">Sustainaible</option>
                    <option value="Current_trend">Current trend</option>
                    
                  </select>*/}
                <br></br>
                <Form>
                  <select  class="selectBox" name="Iteration" onChange={onChange} >
                    <option class="selectOption" value="iteration_4">iteration:4</option>
                    <option class="selectOption" value="iteration_3">iteration:3</option>
                  </select>
                </Form>

                {/*<select  name="Iteration" onChange={onChange}>
                    <option value="iteration_4">iteration:4</option>
                    <option value="iteration_3">iteration:3</option>
                </select>*/}
                <br></br>
                <Form>
                  <select  class="selectBox"name="GraficaType" onChange={onChange} >
                    <option class="selectOption"value="regions">ALL ROW regions</option>
                    <option  class="selectOption" value="countries">ALL FABLE countries</option>
                  </select>
                </Form>

                 {/*<select  name="GraficaType" onChange={onChange}>
                    <option value="regions">ALL ROW regions</option>
                    <option value="countries">ALL FABLE countries</option>
              </select>*/}
                <br></br>
            </div>


        )
    
}
export default ComboBox;


import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import '../css/ComboBox.css';

import '../css/CheckBox.css';
import CheckBoxes from '../components/CheckBoxes.js'

function ComboBox (props) {

    
        const{onChange}=props
        return (
           

            <div className="contenedor-selects">
                <br></br>
                <Form>
                  <select class="selectBox" name="scenathon_id" onChange={onChange} >
                  <option value="" disabled selected hidden>Scenario</option>
                    <option  value="6">Sustainaible</option>
                    <option  value="5">Current trend</option>

                  </select>
                </Form>

              
                <br></br>
                <Form>
                  <select  class="selectBox" name="Iteration" onChange={onChange} >
                  <option value="" disabled selected hidden>Iteration</option>
                    <option  value="after">after</option>
                    <option  value="before">before</option>
                  </select>
                </Form>

               
              

               <CheckBoxes  onChange={onChange} />
            </div>


        )
    
}


export default ComboBox;


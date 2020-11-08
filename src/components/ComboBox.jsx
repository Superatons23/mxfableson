import { Check } from '@material-ui/icons';
import React from 'react';
import { Form } from 'react-bootstrap';

import '../css/ComboBox.css';
import '../css/CheckBox.css';
import CheckBoxes from '../components/CheckBoxes.js'


function ComboBox(props) {


    const { onChange } = props;
    const groupcheckbox = React.createRef();
    const regionscheckbox = React.createRef();
    const countriescheckbox = React.createRef();

    const check = (nameComboBox) => {

        let checkbox=null;

        switch (
        nameComboBox
        ) {

            case "group":
                checkbox=groupcheckbox;

                if (groupcheckbox.current.checked) {

                    regionscheckbox.current.checked = true;
                    countriescheckbox.current.checked = true;
                }
                groupcheckbox.current.checked = true;
                checkbox=groupcheckbox;

                break;
            case "regions":
                checkbox=regionscheckbox;

                if (!regionscheckbox.current.checked && countriescheckbox.current.checked && groupcheckbox.current.checked) {
                    groupcheckbox.current.checked = false;
                    checkbox=countriescheckbox;
                } else if (regionscheckbox.current.checked && countriescheckbox.current.checked) {
                    groupcheckbox.current.checked = true;
                    checkbox=groupcheckbox;
                } else if (!countriescheckbox.current.checked && !regionscheckbox.current.checked && !groupcheckbox.current.checked) {
                    checkbox=regionscheckbox;
                    regionscheckbox.current.checked = true
                }
                break;
            case "countries":
                checkbox=countriescheckbox;
                if (!countriescheckbox.current.checked && regionscheckbox.current.checked && groupcheckbox.current.checked) {
                    groupcheckbox.current.checked = false;
                    checkbox=regionscheckbox;
                } else if (regionscheckbox.current.checked && countriescheckbox.current.checked) {
                    checkbox=groupcheckbox;
                    groupcheckbox.current.checked = true;
                } else if (!countriescheckbox.current.checked && !regionscheckbox.current.checked && !groupcheckbox.current.checked) {
                    checkbox=countriescheckbox;
                    countriescheckbox.current.checked = true
                }



            default:
                break;
        }

onChange(checkbox.current);


    }
    return (

        <div class="contenedor-selects">

            <br></br>
            <select class="selectBox" name="scenathon_id" onChange={onChange}>
                <option class="selectOption" value="6">Sustainaible</option>
                <option class="selectOption" value="5">Current trend</option>

            </select>
            <br></br>
            <select class="selectBox" name="Iteration" onChange={onChange}>
                <option class="selectOption" value="after">after</option>
                <option class="selectOption" value="before">before</option>
            </select>
            <br></br>
           

            <div id="checkBoxContainer" className="checkBoxContainer">

                <label class="container">
                    <input onClick={() => { check("group") }} ref={groupcheckbox} value="group" type="checkbox" name="GraficaType"/>
                    <p>Group</p>
                    <span class="checkmark"></span>
                </label>

                <label class="container">
                    <input onClick={() => { check("regions") }} ref={regionscheckbox} value="regions" type="checkbox" name="GraficaType"/>
                    <p>ALL ROW regions</p>
                    <span class="checkmark"></span>
                </label>

                <label class="container">
                    <input onClick={() => { check("countries") }} ref={countriescheckbox} value="countries" type="checkbox" name="GraficaType"/>
                    <p>ALL FABLE countries</p>
                    <span class="checkmark"></span>
                </label>
                
            </div>
           
            <br></br>
           
         

        </div>



    )


}

export default ComboBox;


import React from 'react';
import { Form } from 'react-bootstrap';

import '../css/CheckBox.css';



const CheckBoxes =(props)=> {  
const{onChange}=props
const groupcheckbox = React.createRef();
const regionscheckbox = React.createRef();
const countriescheckbox = React.createRef();

const check = (nameComboBox) => {
    switch (
    nameComboBox
    ) {
        case "group":
            console.log(groupcheckbox.current.checked)

            if (groupcheckbox.current.checked) {

                regionscheckbox.current.checked = true;
                countriescheckbox.current.checked = true;
            }
            groupcheckbox.current.checked = true;

            break;
        case "regions":
            if (!regionscheckbox.current.checked && countriescheckbox.current.checked && groupcheckbox.current.checked) {
                groupcheckbox.current.checked = false;

            } else if (regionscheckbox.current.checked && countriescheckbox.current.checked) {
                groupcheckbox.current.checked = true;
            } else if (!countriescheckbox.current.checked && !regionscheckbox.current.checked && !groupcheckbox.current.checked) {
                regionscheckbox.current.checked = true
            }
            break;
        case "countries":
            if (!countriescheckbox.current.checked && regionscheckbox.current.checked && groupcheckbox.current.checked) {
                groupcheckbox.current.checked = false;
            } else if (regionscheckbox.current.checked && countriescheckbox.current.checked) {
                groupcheckbox.current.checked = true;
            } else if (!countriescheckbox.current.checked && !regionscheckbox.current.checked && !groupcheckbox.current.checked) {
                countriescheckbox.current.checked = true
            }
        default:
            break;
    }

}
        return (
            <div id="checkBoxContainer" className="checkBoxContainer">

            <label class="container">
                <input onClick={() => { check("group") }} ref={groupcheckbox} value="group" type="checkbox" />
                <p>Group</p>
                <span class="checkmark"></span>
            </label>

            <label class="container">
                <input onClick={() => { check("regions") }} ref={regionscheckbox} value="regions" type="checkbox" />
                <p>ALL ROW regions</p>
                <span class="checkmark"></span>
            </label>

            <label class="container">
                <input onClick={() => { check("countries") }} ref={countriescheckbox} value="countries" type="checkbox" />
                <p>ALL FABLE countries</p>
                <span class="checkmark"></span>
            </label>
        </div>
        )       
}




  


//var countriesCheckboxSelected= document.getElementById('countriescheckbox');

export default CheckBoxes;
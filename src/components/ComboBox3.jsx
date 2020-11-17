import React from 'react';
import { Form } from 'react-bootstrap';
import '../css/index.css';
import CheckBoxes from '../components/CheckBoxes.js'


function ComboBox (props) {
	const{onChange}=props
	return (
		<div className="contenedor-selects"><br/>
			<Form>
				<select className="selectBox" name="scenathon_id" onChange={onChange} >
					<option value="" disabled selected hidden>Scenario</option>
					<option value="6">Sustainaible</option>
					<option value="5">Current trend</option>
				</select>
			</Form>
			<br/>
			<Form>
				<select className="selectBox" name="Iteration" onChange={onChange} >
					<option value="" disabled selected hidden>Iteration</option>
					<option value="after">after</option>
					<option value="before">before</option>
				</select>
			</Form>




			<CheckBoxes  onChange={onChange} />
		</div>
	)
}
export default ComboBox;
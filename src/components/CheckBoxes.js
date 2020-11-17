import React from 'react';
import '../css/index.css';

const CheckBoxes = (props) => {
	const{ onChange }=props
	const regionscheckbox = React.createRef();
	const countriescheckbox = React.createRef();
	
	const check = (nameComboBox) => {
		let checkbox=null;
		switch (nameComboBox) {
			case "regions":
				checkbox=regionscheckbox;
				if(regionscheckbox.current.checked && countriescheckbox.current.checked){
					countriescheckbox.current.checked =false;
					checkbox=regionscheckbox;
				}
				else if(!regionscheckbox.current.checked && !countriescheckbox.current.checked ){
					countriescheckbox.current.checked =true;
					checkbox=countriescheckbox;
				}
			break;
			case "countries":
				checkbox=countriescheckbox;
				if(countriescheckbox.current.checked && regionscheckbox.current.checked){
				regionscheckbox.current.checked =false;
				checkbox=countriescheckbox;
				}
				else if(!regionscheckbox.current.checked && !countriescheckbox.current.checked ){
					regionscheckbox.current.checked =true;
					checkbox=regionscheckbox;
				}
			break;
			default:break;
		}
		onChange(checkbox.current);
	}
	return (
		<div id="checkBoxContainer" className="checkBoxContainer">
			<label class="container">
				<input 
					onClick={() => { check("regions") }} 
					ref={regionscheckbox} 
					value="regions" 
					type="checkbox"  
					name="GraficaType" />
				<p>ALL ROW regions</p>
				<span className="checkmark"/>
			</label>
			<label class="container">
				<input 
					onClick={() => { check("countries") }} 
					ref={countriescheckbox} 
					value="countries" 
					type="checkbox"  
					name="GraficaType"/>
				<p>ALL FABLE countries</p>
				<span className="checkmark"/>
			</label>
		</div>
	)
}
export default CheckBoxes;
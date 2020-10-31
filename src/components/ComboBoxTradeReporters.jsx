import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
.contenedor selects{
  background-color: #528D93 ;
}
.conetenedor-select {
  color:white;
  &: hover{
    color:#94B046;
  }
}
`;

function ComboBoxTradeReportersImporters (props) {

    
       
        return (
            <Styles>

            <div className="contenedor-selects">
                <br></br>
                <select class="selectBox" name="Product" onChange={props.metodo}>
                    <option  class="selectOption" value="abaca">abaca</option>
                    <option class="selectOption" value="apple">apple</option>
                    <option class="selectOption"  value="banana">banana</option>
                    <option  class="selectOption" value="barley">barley</option>
                    <option  class="selectOption" value="beans">beans</option>
                    <option class="selectOption" value="beef">beef</option>
                    <option class="selectOption" value="cassava">cassava</option>
                    <option class="selectOption" value="cattle">cattle</option>
                    <option  class="selectOption" value="cattle">cattle</option>
                    <option class="selectOption" value="cereal_other">cereal_other</option>
                    <option class="selectOption" value="chicken">chicken</option>
                    <option class="selectOption" value="chickens">chickens</option>
                    <option class="selectOption" value="chickens">chickens</option>
                    <option class="selectOption" value="chips_and__particles">chips and particles</option>
                    <option class="selectOption" value="cirus_other">cirus other</option>
                    <option class="selectOption" value="clove">clove</option>
                    <option class="selectOption" value="cocoa">cocoa</option>
                    <option  class="selectOption" value="coconut">coconut</option>
                    <option class="selectOption" value="cocooil">cocooil</option>
                    <option  class="selectOption"value="coffe">coffe</option>
                    <option  class="selectOption"value="corn">corn</option>
                    <option  class="selectOption" value="cottcake">cottcake</option>
                    <option class="selectOption" value="cottlint">cottlint</option>
                    <option class="selectOption" value="cottoil">cottoil</option>
                    <option  class="selectOption"value="cotton">cotton</option>
                    <option  class="selectOption"value="date">date</option>
                    <option class="selectOption" value="eggs">eggs</option>
                    <option class="selectOption" value="fiber_hard_other">fiber hard other</option>
                    <option  class="selectOption"value="fruit_soft_other">fruit soft other</option>
                    <option  class="selectOption"value="fruit_other">fruit other</option>
                    <option  class="selectOption"value="grape">grape</option>
                    <option  class="selectOption"value="grapefruit">grapefruit</option>
                    <option  class="selectOption"value="groundnut">groundnut</option>
                    <option  class="selectOption"value="groundnutcake">groundnutcake</option>
                    <option  class="selectOption"value="groundnutoil">groundnutoil</option>
                    <option  class="selectOption"value="honey">honey</option>
                    <option class="selectOption" value="jute">jute</option>
                    <option class="selectOption" value="lemon">lemon</option>
                    <option  class="selectOption"value="meat_other">meat other</option>
                    <option  class="selectOption"value="mech_pulp">mech pulp</option>
                    <option  class="selectOption"value="milk">milk</option>
                    <option  class="selectOption"value="millet">millet</option>
                    <option class="selectOption" value="mutton_goat">mutton_goat</option>
                    <option  class="selectOption"value="nuts">nuts</option>
                    <option  class="selectOption"value="oats">oats</option>
                    <option class="selectOption" value="oilpalmfruit">oilpalmfruit</option>
                    <option class="selectOption" value="oilseed_other">oilseed other</option>
                    <option  class="selectOption"value="olive">olive</option>
                    <option class="selectOption" value="oliveoil">oliveoil</option>
                    <option  class="selectOption" value="onion">onion</option>
                    <option  class="selectOption"value="orange">orange</option>
                    <option class="selectOption" value="other_oil">other oil</option>
                    <option class="selectOption" value="other_olscake">other olscake</option>
                    <option  class="selectOption" value="palm_oil">palm oil</option>
                    <option class="selectOption" value="palmkernelcake">palmkernelcake</option>
                    <option class="selectOption" value="palmkerneloil">palmkerneloil</option>
                    <option class="selectOption" value="peas">peas</option>
                    <option class="selectOption" value="pepper">pepper</option>
                    <option class="selectOption" value="pigs">pigs</option>
                    <option class="selectOption" value="pigs">pigs</option>
                    <option class="selectOption" value="piment">piment</option>
                    <option class="selectOption" value="pinapple">pinapple</option>
                    <option class="selectOption" value="plantain">plantain</option>
                    <option class="selectOption" value="pork">pork</option>
                    <option  class="selectOption"value="potato">potato</option>
                    <option class="selectOption" value="pulses_other">pulses other</option>
                    <option class="selectOption" value="repecake">repecake</option>
                    <option class="selectOption" value="rapeoil">rapeoil</option>
                    <option class="selectOption" value="rapeseed">rapeseed</option>
                    <option  class="selectOption"value="rice">rice</option>
                    <option  class="selectOption"value="rubber">rubber</option>
                    <option class="selectOption" value="rye">rye</option>
                    <option class="selectOption" value="sesame">sesame</option>
                    <option class="selectOption" value="sesamoil">sesamoil</option>
                    <option class="selectOption" value="sheep_goats">sheep goats</option>
                    <option class="selectOption" value="sheep_goats">sheep_goats</option>
                    <option class="selectOption" value="sisal">sisal</option>
                    <option class="selectOption" value="sorghum">sorghum</option>
                    <option class="selectOption" value="soyabean">soyabean</option>
                    <option class="selectOption" value="soycake">soycake</option>
                    <option class="selectOption" value="soyoil">soyoil</option>
                    <option class="selectOption" value="spices_other">spices other</option>
                    <option class="selectOption" value="sugarbeet">sugarbeet</option>
                    <option class="selectOption" value="sugarcarne">sugarcarne</option>
                    <option class="selectOption" value="sugarraw">sugarraw</option>
                    <option class="selectOption" value="sunflcake">sunflcake</option>
                    <option class="selectOption" value="sunfloil">sunfloil</option>
                    <option class="selectOption" value="sunflower">sunflower</option>
                    <option class="selectOption" value="sweet_potato">sweet_potato</option>
                    <option class="selectOption" value="tea">tea</option>
                    <option class="selectOption" value="tabacco">tabacco</option>
                    <option class="selectOption" value="tomato">tomato</option>
                    <option class="selectOption" value="tuber_other">tuber other</option>
                    <option class="selectOption" value="vegetable_other">vegetable other</option>
                    <option class="selectOption"value="wheat">wheat</option>
                    <option class="selectOption" value="yams">yams</option>



                    
                </select>
                <br></br>
                <select  class="selectBox" name="iteration" onChange={props.metodo}>
                    <option class="selectOption" value="after">after</option>
                    <option  class="selectOption" value="before">before</option>
                </select>
              
            </div>
    </Styles>


        )
    
}
export default ComboBoxTradeReportersImporters;


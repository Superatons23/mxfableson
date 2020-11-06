import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from 'react-pro-sidebar';
import '../css/SideMenu.css';
 
const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar, onChange }) => {
  const handleChange  =e =>{
    onChange(e);
  }
  return (
  
    <ProSidebar
      image={false}
      rtl={false}
      collapsed={false}
      toggled={false}
      breakPoint="md"
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          Menu
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="round">
          {/*<MenuItem>
            DASHBOARD
          </MenuItem>*/}
        {/*<MenuItem>Menu 1</MenuItem>*/}
        </Menu>
        <Menu iconShape="circle">
          <SubMenu title="Dashboard" >


           <MenuItem onClick={()=>handleChange("Global Target Summary")}>Global Target Summary</MenuItem>
        
            <SubMenu icon title="Net Forest Cover Change">
              <MenuItem class="submenu" onClick={()=>handleChange("Net Forest Cover Change 1")}>Net Forest Cover Change 1</MenuItem>
              <MenuItem  class="submenu" onClick={()=>handleChange("Net Forest Cover Change 2")}>Net Forest Cover Change 2</MenuItem>
              {/*<SubMenu title="submenu">
                <MenuItem>submenu 3.3.1 </MenuItem>
                <MenuItem>submenu 3.3.2 </MenuItem>
                <MenuItem>submenu 3.3.3 </MenuItem>
                </SubMenu>*/}
            </SubMenu>
            <MenuItem onClick={()=>handleChange("Biodiversity")}>Biodiversity</MenuItem>
            <MenuItem onClick={()=>handleChange("Protected Areas by Type")}>Protected Areas by Type</MenuItem>
            <MenuItem onClick={()=>handleChange("Land Cover")}>Land Cover</MenuItem>
            <SubMenu title="Fresh Water">
              <MenuItem class="submenu" onClick={()=>handleChange("Fresh Water 1")}>Fresh Water 1</MenuItem>
              <MenuItem  class="submenu"onClick={()=>handleChange("Fresh Water 2")}>Fresh Water 2</MenuItem>
            </SubMenu>
            <SubMenu title="Green House Gas (GHG) Emissions">
              <MenuItem  class="submenu"onClick={()=>handleChange("Green House Gas (GHG) Emissions 1")}>Green House Gas (GHG) Emissions 1</MenuItem>
              <MenuItem  class="submenu"onClick={()=>handleChange("Green House Gas (GHG) Emissions 2")}>Green House Gas (GHG) Emissions 2</MenuItem>
            </SubMenu>
            <SubMenu title="Food Energy Intake Per Capita">
              <MenuItem  class="submenu"onClick={()=>handleChange("Food Energy Intake Per Capita 1")}>Food Energy Intake Per Capita 1</MenuItem>
              <MenuItem  class="submenu"onClick={()=>handleChange("Food Energy Intake Per Capita 2")}>Food Energy Intake Per Capita 2</MenuItem>
            </SubMenu>
          </SubMenu>
            <SubMenu title="Trade Report">
              <SubMenu title="Sustainable - net">
                <MenuItem class="submenu" onClick={()=>handleChange("Sustainable_next_importers")}>Importers</MenuItem>
                <MenuItem class="submenu" onClick={()=>handleChange("Sustainable_next_exporters")} >Exporters</MenuItem>
              </SubMenu>
              <SubMenu title="Current Trend">
                <MenuItem class="submenu"  onClick={()=>handleChange("Current_trend_next_importers")}>Importers</MenuItem>
                <MenuItem  class="submenu"  onClick={()=>handleChange("Current_trend_next_exporters")}>Exporters</MenuItem>
              </SubMenu>

            </SubMenu>

        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default Aside;

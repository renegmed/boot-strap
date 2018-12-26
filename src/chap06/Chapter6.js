import React from 'react'; 
import { Link } from 'react-router-dom';  

function Chapter6(props) { 
    return (
      <div className="container-fluid">
        <div><b>Chapter 6 - Buttons</b></div>
        <section className="d-flex flex-column"> 
          <Link to="/ButtonsWithColor"> Buttons with Color </Link>   
          <Link to="/OutlinedButtons"> Outlined Buttons with Color </Link>          
          <Link to="/ButtonsWithTags"> Making Buttons with Other Tags </Link> 
          <Link to="/ButtonGroups"> Button Groups </Link>
          <Link to="/ButtonDropdown"> Button Groups with Drop Down Menus </Link> 
          <Link to="/RadioCheckbox"> Radio and Checkbox Buttons </Link> 
          <Link to="/ButtonToolbars"> Button Toolbars </Link> 
          <Link to="/Alerts"> Alerts </Link>
          <Link to="/Badges"> Badges </Link>
        </section>  
      </div>
    ); 
}

export default Chapter6;
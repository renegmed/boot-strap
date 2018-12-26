import React from 'react'; 
import { Route } from 'react-router-dom';
 
import Chapter6 from './Chapter6';
import ButtonsWithColor from './ButtonsWithColor';
import OutlinedButtons from './OutlinedButtons';
import ButtonsWithTags from './ButtonsWithTags';
import ButtonGroups from './ButtonGroups';
import ButtonDropdown from './ButtonDropdown';
import RadioCheckbox from './RadioCheckbox';
import ButtonToolbars from './ButtonToolbars';
import Alerts from './Alerts'; 
import Badges from './Badges'; 

function Chapter5Router(props) { 
    return (
      <div > 
        <Route exact path="/Chapter6" render={ () => <Chapter6/> } /> 
        <Route exact path="/ButtonsWithColor" render={ () => <ButtonsWithColor/> } /> 
        <Route exact path="/OutlinedButtons" render={ () => <OutlinedButtons/> } />
        <Route exact path="/ButtonsWithTags" render={ () => <ButtonsWithTags/> } /> 
        <Route exact path="/ButtonGroups" render={ () => <ButtonGroups/> } /> 
        <Route exact path="/ButtonDropdown" render={ () => <ButtonDropdown/> } /> 
        <Route exact path="/RadioCheckbox" render={ () => <RadioCheckbox/> } /> 
        <Route exact path="/ButtonToolbars" render={ () => <ButtonToolbars/> } /> 
        <Route exact path="/Alerts" render={ () => <Alerts/> } /> 
        <Route exact path="/Badges" render={ () => <Badges/> } /> 
        </div>
    );
   
}

export default Chapter5Router;

import React from 'react'; 
import { Route } from 'react-router-dom';
 
import Chapter4 from './Chapter4';
import PrecodedNavbar from './PrecodedNavbar';
import ARIADataDefinitions from './ARIADataDefinitions';
import NavbarDropdown from './NavbarDropdown';
import OtherNav from './OtherNav';
import NavbarColors from './NavbarColors';
import NavbarSearchBox from './NavbarSearchBox';
import Breadcrumbs from './Breadcrumbs';
import Pagination from './Pagination';
import AnimatedScroll from './AnimatedScroll'; 

function Chapter4Router(props) { 
    return (
      <div > 
        <Route exact path="/Chapter4" render={ () => <Chapter4/> } /> 
        <Route exact path="/PrecodedNavbar" render={ () => <PrecodedNavbar/> } /> 
        <Route exact path="/ARIADataDefinitions" render={ () => <ARIADataDefinitions/> } /> 
        <Route exact path="/NavbarDropdown" render={ () => <NavbarDropdown/> } /> 
        <Route exact path="/OtherNav" render={ () => <OtherNav/> } /> 
        <Route exact path="/NavbarColors" render={ () => <NavbarColors/> } /> 
        <Route exact path="/NavbarSearchBox" render={ () => <NavbarSearchBox/> } /> 
        <Route exact path="/Breadcrumbs" render={ () => <Breadcrumbs/> } /> 
        <Route exact path="/Pagination" render={ () => <Pagination/> } /> 
        <Route exact path="/AnimatedScroll" render={ () => <AnimatedScroll/> } /> 
      </div>
    );
   
}

export default Chapter4Router;

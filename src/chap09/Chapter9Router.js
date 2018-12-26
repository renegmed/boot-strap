import React from 'react'; 
import { Route } from 'react-router-dom';
 
import Chapter9 from './Chapter9';
import Jumbotron from './Jumbotron';
import Carousels from './Carousels';
import Collapse from './Collapse';
import Accordian from './Accordian';
 
 
function Chapter9Router(props) { 
    return (
        <div > 
            <Route exact path="/Chapter9" render={ () => <Chapter9/> } /> 
            <Route exact path="/Jumbotron" render={ () => <Jumbotron/> } /> 
            <Route exact path="/Carousels" render={ () => <Carousels/> } /> 
            <Route exact path="/Collapse" render={ () => <Collapse/> } /> 
            <Route exact path="/Accordian" render={ () => <Accordian/> } /> 
        </div>
             
    );
   
}

export default Chapter9Router;

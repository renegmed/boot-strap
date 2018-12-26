import React from 'react'; 
import { Route } from 'react-router-dom';
 
import Chapter7 from './Chapter7';
import Images from './Images';
import ImageFigures from './ImageFigures';
import FontAwesome from './FontAwesome';
import Cards from './Cards';
import CardColorsShadows from './CardColorsShadows';
import CardDecksGroups from './CardDecksGroups';
import CardColumns from './CardColumns';
import Tables from './Tables';
import Borders from './Borders';
import MediaObjects from './MediaObjects'; 

function Chapter7Router(props) { 
    return (
      <div > 
        <Route exact path="/Chapter7" render={ () => <Chapter7/> } /> 
        <Route exact path="/Images" render={ () => <Images/> } /> 
        <Route exact path="/ImageFigures" render={ () => <ImageFigures/> } />
        <Route exact path="/FontAwesome" render={ () => <FontAwesome/> } /> 
        <Route exact path="/Cards" render={ () => <Cards/> } /> 
        <Route exact path="/CardColorsShadows" render={ () => <CardColorsShadows/> } /> 
        <Route exact path="/CardDecksGroups" render={ () => <CardDecksGroups/> } /> 
        <Route exact path="/CardColumns" render={ () => <CardColumns/> } /> 
        <Route exact path="/Tables" render={ () => <Tables/> } /> 
        <Route exact path="/Borders" render={ () => <Borders/> } /> 
        <Route exact path="/MediaObjects" render={ () => <MediaObjects/> } />  
        </div>
    );
   
}

export default Chapter7Router;

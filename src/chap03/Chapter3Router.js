import React from 'react'; 
import { Route } from 'react-router-dom';

import Chapter3 from './Chapter3';
import BackgroundColors from './BackgroundColors';
import ContainersRows from './ContainersRows';
import MediaBreakpoints from './MediaBreakpoints';
import GridSystems from './GridSystems';
import AlignmentOffsets from './AlignmentOffsets';
import Padding from './Padding';
import FlexibleBox from './FlexibleBox';


function Chapter3Router(props) { 
    return (
      <div > 
        <Route exact path="/Chapter3" render={ () => <Chapter3/> } /> 
        <Route exact path="/BackgroundColors" render={ () => <BackgroundColors/> } /> 
        <Route exact path="/ContainersRows" render={ () => <ContainersRows/> } /> 
        <Route exact path="/MediaBreakpoints" render={ () => <MediaBreakpoints/> } /> 
        <Route exact path="/GridSystems" render={ () => <GridSystems/> } /> 
        <Route exact path="/AlignmentOffsets" render={ () => <AlignmentOffsets/> } /> 
        <Route exact path="/Padding" render={ () => <Padding/> } /> 
        <Route exact path="/FlexibleBox" render={ () => <FlexibleBox/> } /> 
      </div>
    ); 
}

export default Chapter3Router;

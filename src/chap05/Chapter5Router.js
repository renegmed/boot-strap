import React from 'react'; 
import { Route } from 'react-router-dom';
 
import Chapter5 from './Chapter5';
import HeadlineTags from './HeadlineTags';
import TextColors from './TextColors';
import ParagraphsBlockquotes from './ParagraphsBlockquotes';
import InlineTags from './InlineTags';
import Lists from './Lists';
import ListGroups from './ListGroups';
import ResponsiveFloats from './ResponsiveFloats';
import FixedElementsJustifiedType from './FixedElementsJustifiedType'; 

function Chapter5Router(props) { 
    return (
      <div > 
        <Route exact path="/Chapter5" render={ () => <Chapter5/> } /> 
        <Route exact path="/HeadlineTags" render={ () => <HeadlineTags/> } /> 
        <Route exact path="/TextColors" render={ () => <TextColors/> } />
        <Route exact path="/ParagraphsBlockquotes" render={ () => <ParagraphsBlockquotes/> } /> 
        <Route exact path="/InlineTags" render={ () => <InlineTags/> } /> 
        <Route exact path="/Lists" render={ () => <Lists/> } /> 
        <Route exact path="/ListGroups" render={ () => <ListGroups/> } /> 
        <Route exact path="/ResponsiveFloats" render={ () => <ResponsiveFloats/> } /> 
        <Route exact path="/FixedElementsJustifiedType" render={ () => <FixedElementsJustifiedType/> } /> 
        </div>
    );
   
}

export default Chapter5Router;

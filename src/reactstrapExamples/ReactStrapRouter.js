import React from 'react'; 
import { Route } from 'react-router-dom';
 
import ReactStrap from './ReactStrap';
import GroupedForm from './GroupedForm';
import BasicAlert from './BasicAlert';
import BasicButton from './BasicButton';
import ModalComponent from './ModalComponent';
import BasicTooltip from './BasicTooltip';
import PeopleCardMain from './PeopleCardMain';

function ReactStrapRouter(props) { 
    return (
        <div > 
            <Route exact path="/ReactStrap" render={ () => <ReactStrap/> } /> 
            <Route exact path="/GroupedForm" render={ () => <GroupedForm/> } /> 
            <Route exact path="/BasicAlert" render={ () => <BasicAlert/> } /> 
            <Route exact path="/BasicButton" render={ () => <BasicButton/> } />  
            <Route exact path="/BasicTooltip" render={ () => <BasicTooltip/> } /> 
            <Route exact path="/ModalComponent" render={ () => <ModalComponent/> } /> 
            <Route exact path="/PeopleCardMain" render={ () => <PeopleCardMain/> } /> 
            
        </div>    
    );
   
}

export default ReactStrapRouter;

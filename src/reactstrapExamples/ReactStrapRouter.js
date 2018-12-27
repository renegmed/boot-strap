import React from 'react'; 
import { Route } from 'react-router-dom';
 
import ReactStrap from './ReactStrap';
import GroupedForm from './GroupedForm';
import BasicAlert from './BasicAlert';
import BasicButton from './BasicButton';
import ModalComponent from './ModalComponent';
import BasicTooltip from './BasicTooltip';
import PeopleCardMain from './PeopleCardMain';
import BasicNavbarBrand from './BasicNavbarBrand';
import ButtonColored from './ButtonColored';
import BasicPagination from './BasicPagination';
import ButtonGroupExample from './ButtonGroupExample';
import InputGroupExample from './InputGroupExample';
import InputGroupButtonExample from './InputGroupButtonExample';
import FormExample from './FormExample';


function ReactStrapRouter(props) { 
    return (
        <div > 
            <Route exact path="/ReactStrap" render={ () => <ReactStrap/> } /> 
            <Route exact path="/GroupedForm" render={ () => <GroupedForm/> } /> 
            <Route exact path="/BasicAlert" render={ () => <BasicAlert/> } /> 
            <Route exact path="/BasicButton" render={ () => <BasicButton/> } />  
            <Route exact path="/ButtonColored" render={ () => <ButtonColored/> } /> 
            <Route exact path="/BasicTooltip" render={ () => <BasicTooltip/> } /> 
            <Route exact path="/ModalComponent" render={ () => <ModalComponent/> } /> 
            <Route exact path="/PeopleCardMain" render={ () => <PeopleCardMain/> } /> 
            <Route exact path="/BasicNavbarBrand" render={ () => <BasicNavbarBrand/> } /> 
            <Route exact path="/BasicPagination" render={ () => <BasicPagination/> } /> 
            <Route exact path="/ButtonGroupExample" render={ () => <ButtonGroupExample/> } /> 
            <Route exact path="/InputGroupExample" render={ () => <InputGroupExample/> } /> 
            <Route exact path="/InputGroupButtonExample" render={ () => <InputGroupButtonExample/> } /> 
            <Route exact path="/FormExample" render={ () => <FormExample/> } /> 
            
            
        </div>    
    );
   
}

export default ReactStrapRouter;

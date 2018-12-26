import React from 'react'; 
import { Route } from 'react-router-dom';
 
import Chapter8 from './Chapter8';
import SetupHTMLForm from './SetupHTMLForm';
import StylingForm from './StylingForm';
import CheckFormClasses from './CheckFormClasses';
import InlineForms from './InlineForms';
import MultiColumnForms from './MultiColumnForms';
import ValidationClasses from './ValidationClasses';
import InputGroups from './InputGroups';
import RadiosCheckboxSelect from './RadiosCheckboxSelect'; 
function Chapter8Router(props) { 
    return (
        <div > 
            <Route exact path="/Chapter8" render={ () => <Chapter8/> } /> 
            <Route exact path="/SetupHTMLForm" render={ () => <SetupHTMLForm/> } /> 
            <Route exact path="/StylingForm" render={ () => <StylingForm/> } /> 
            <Route exact path="/CheckFormClasses" render={ () => <CheckFormClasses/> } /> 
            <Route exact path="/InlineForms" render={ () => <InlineForms/> } /> 
            <Route exact path="/MultiColumnForms" render={ () => <MultiColumnForms/> } /> 
            <Route exact path="/ValidationClasses" render={ () => <ValidationClasses/> } /> 
            <Route exact path="/InputGroups" render={ () => <InputGroups/> } /> 
            <Route exact path="/RadiosCheckboxSelect" render={ () => <RadiosCheckboxSelect/> } /> 
        </div>
    );
   
}

export default Chapter8Router;

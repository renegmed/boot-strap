import React from 'react'; 
import { Link } from 'react-router-dom';  

function Chapter8(props) { 
    return (
      <div className="container-fluid">
        <div><b>Chapter 8 - Forms with Bootstrap</b></div>
        <section className="d-flex flex-column"> 
            <Link to="/SetupHTMLForm"> Setting up HTML Form </Link>
            <Link to="/StylingForm"> Styling Form </Link>
            <Link to="/CheckFormClasses"> Check Form Classes </Link>
            <Link to="/InlineForms"> Inline Forms </Link>
            <Link to="/MultiColumnForms"> Multi-column Forms </Link>
            <Link to="/ValidationClasses"> Validation Classes </Link>
            <Link to="/InputGroups"> Input Groups </Link>   
            <Link to="/RadiosCheckboxSelect"> Radios, Checkboxes, and Select </Link> 
        </section>  
      </div>
    ); 
}

export default Chapter8;
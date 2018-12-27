import React from 'react'; 
import { Link } from 'react-router-dom';  

function ReactStrap(props) { 
    return (
      <div className="container-fluid">
        <div><b>Reactstrap examples</b></div>
        <section className="d-flex flex-column"> 
            <Link to="/BasicAlert"> Basic Alert </Link>
            <Link to="/BasicButton"> Basic Button </Link>  
            <Link to="/BasicTooltip"> Basic Tooltip </Link> 
            <Link to="/ModalComponent"> Modal Component </Link> 
            <Link to="/PeopleCardMain"> Card Example </Link>
            <Link to="/GroupedForm"> Using FormGroup </Link> 
        </section>  
      </div>
    ); 
}

export default ReactStrap;
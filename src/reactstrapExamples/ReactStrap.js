import React from 'react'; 
import { Link } from 'react-router-dom';  

function ReactStrap(props) { 
    return (
      <div className="container-fluid">
        <div><b>Reactstrap examples</b></div>
        <section className="d-flex flex-column"> 
            <Link to="/BasicAlert"> Basic Alert </Link>
            <Link to="/BasicButton"> Basic Button </Link>  
            <Link to="/ButtonColored"> Colored Buttons </Link> 
            <Link to="/BasicTooltip"> Basic Tooltip </Link> 
            <Link to="/ModalComponent"> Modal Component </Link> 
            <Link to="/PeopleCardMain"> Card Example </Link>
            <Link to="/GroupedForm"> Using FormGroup </Link> 
            <Link to="/BasicNavbarBrand"> NavbarBrand </Link>  
            <Link to="/BasicPagination"> Basic Pagination </Link> 
            <Link to="/ButtonGroupExample"> Button Group </Link> 
            <Link to="/InputGroupExample"> Input Group  </Link> 
            <Link to="/InputGroupButtonExample"> Input Group Button </Link> 
            <Link to="/FormExample"> Form </Link> 
            
        </section>  
      </div>
    ); 
}

export default ReactStrap;
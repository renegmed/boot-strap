import React from 'react'; 
import { Link } from 'react-router-dom';  

function Chapter9(props) { 
    return (
      <div className="container-fluid">
        <div><b>Chapter 9 - Other Bootstrap Components</b></div>
        <section className="d-flex flex-column"> 
            <Link to="/Jumbotron"> Jumbotron </Link> 
            <Link to="/Carousels"> Carousels </Link>
            <Link to="/Collapse"> Collapse </Link>
            <Link to="/Accordian"> Accordian </Link>
        </section>  
      </div>
    ); 
}

export default Chapter9;
import React from 'react'; 
import { Link } from 'react-router-dom';

function Chapter4(props) { 
    return (
      <div className="container-fluid">
        <div><b>Chap 4 - Bootstrap Navigation</b></div>
        <section className="d-flex flex-column"> 
          <Link to="/PrecodedNavbar"> Adding the Precoded Navbar </Link>   
          <Link to="/HandcodedNavbar"> Hand Coding the Navbar </Link>  
          <Link to="/ARIADataDefinitions"> Navar A.R.I.A and Data-Definitions </Link>   
          <Link to="/NavbarDropdown"> Navbar with a Dropdown </Link> 
          <Link to="/OtherNav"> Other Navigations </Link> 
          <Link to="/NavbarColors"> Navbar Colors </Link>
          <Link to="/NavbarSearchBox"> Navbar with Search Box </Link> 
          <Link to="/Breadcrumbs"> Breadcrumbs </Link> 
          <Link to="/Pagination"> Pagination </Link> 
          <Link to="/AnimatedScroll"> AnimatedScroll </Link>
        </section>  
      </div>
    );
   
}

export default Chapter4;
import React from 'react'; 
import { Link } from 'react-router-dom';

function TableOfContent(props) { 
    return (
      <div className="container-fluid">
        <Link to="/Chapter3">Chapter 3 - Graphic Design and Responsive Layout </Link><br/>   
        <Link to="/Chapter4">Chapter 4 - Bootstrap Navigation </Link><br/>   
        <Link to="/Chapter5">Chapter 5 - Adding Content with Typography </Link> <br/>   
        <Link to="/Chapter6">Chapter 6 - Buttons </Link> <br/> 
        <Link to="/Chapter7">Chapter 7 - Images, Tables, and Cards </Link>  <br/>  
        <Link to="/Chapter8">Chapter 8 - Forms with Bootstrap </Link>  <br/>  
        <Link to="/Chapter9">Chapter 9 - Other Bootstrap Components </Link><br/> 
        <Link to="/Chapter10">Chapter 10 - Javascript and Bootstrap BFF </Link>   <br/>
        <Link to="/ReactStrap">Collection of reactstrap Examples</Link>   <br/> 
        <Link to="/BootstrapTable2">React Bootstrap Table 2 Examples</Link>   <br/>             
      </div>
    );
   
}

export default TableOfContent;
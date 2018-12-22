import React from 'react'; 
import { Link } from 'react-router-dom';

function TableOfContent(props) { 
    return (
      <div>
        <Link to="/Chapter3">Chapter 3 - Graphic Design and Responsive Layout </Link>   
        <Link to="/Chapter4">Chapter 4 - Bootstrap Navigation </Link>   
        <Link to="/Chapter5">Chapter 5 - Adding Content with Typography </Link>   
        <Link to="/Chapter6">Chapter 6 - Buttons </Link> 
        <Link to="/Chapter7">Chapter 7 - Images, Tables, and Cards </Link>   
        <Link to="/Chapter8">Chapter 8 - Forms with Bootstrap </Link>   
        <Link to="/Chapter9">Chapter 9 - Other Bootstrap Components </Link>
        <Link to="/Chapter10">Chapter 10 - Javascript and Bootstrap BFF </Link>       
      </div>
    );
   
}

export default TableOfContent;
import React from 'react'; 
import { Link } from 'react-router-dom';

function Chapter3(props) { 
    return (
      <div className="container-fluid">
        <div><b>Chap 3 - Graphic Design and Responsive Layout</b></div>   <br/>  
        <Link to="/BackgroundColors"> Background Colors </Link>  <br/>  
        <Link to="/ContainersRows"> Containers and Rows </Link>  <br/>  
        <Link to="/MediaBreakpoints"> Media Breakpoints </Link>  <br/>  
        <Link to="/GridSystems"> The Grid Systems </Link>  <br/>  
        <Link to="/AlignmentOffsets"> Alignment and Offsets </Link>  <br/>  
        <Link to="/Padding"> Padding, Display and Margins </Link>  <br/>  
        <Link to="/FlexibleBox"> Flexible Box </Link>  <br/>  
      </div>
    );
   
}

export default Chapter3;
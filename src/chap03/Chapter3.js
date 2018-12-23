import React from 'react'; 
import { Link } from 'react-router-dom';

function Chapter3(props) { 
    return (
      <div className="container-fluid">
        <div><b>Chap 3 - Graphic Design and Responsive Layout</b></div>
        <section className="d-flex flex-column"> 
          <Link to="/BackgroundColors"> Background Colors </Link>  
          <Link to="/ContainersRows"> Containers and Rows </Link>   
          <Link to="/MediaBreakpoints"> Media Breakpoints </Link> 
          <Link to="/GridSystems"> The Grid Systems </Link> 
          <Link to="/AlignmentOffsets"> Alignment and Offsets </Link> 
          <Link to="/Padding"> Padding, Display and Margins </Link> 
          <Link to="/FlexibleBox"> Flexible Box </Link> 
        </section>    
      </div>
    );
   
}

export default Chapter3;
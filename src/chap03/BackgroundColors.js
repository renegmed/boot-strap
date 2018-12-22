import React from 'react'; 
   
  
function BackgroundColors(props) {  
    return (
      <div> 
        <title>Bootstrap Background Colors</title>

        <div className="myDiv" id="red">Hello Bootstrap, color from Stylesheet</div>
        <div className="myDiv" id="green">Hello Bootstrap, color from stylesheet</div>
        <hr></hr>
        <div className="myDiv bg-primary">Hello Bootstrap, color from bootstrap - bg-primary</div>
        <div className="myDiv bg-secondary">Hello Bootstrap, color from bootstrap - bg-secondary</div>
        <div className="myDiv bg-success">Hello Bootstrap, color from bootstrap - bg-success</div>
        <div className="myDiv bg-danger">Hello Bootstrap, color from bootstrap - bg-danger</div>
        <div className="myDiv bg-warning">Hello Bootstrap, color from bootstrap - bg-warning</div>
        <hr></hr>
        <div className="myDiv bg-info">Hello Bootstrap, color from bootstrap - bg-info</div>
        <div className="myDiv bg-light text-dark">Hello Bootstrap, color from bootstrap - bg-light  text-dark</div>
        <div className="myDiv bg-dark">Hello Bootstrap, color from bootstrap - bg-dark</div>
        <div className="myDiv bg-white text-dark">Hello Bootstrap, color from bootstrap - bg-white text-dark</div>
        <div className="myDiv bg-transparent">Hello Bootstrap, color from bootstrap - bg-transparent</div>
      </div>
    );
   
}

export default BackgroundColors;
import React from 'react';  

function TextColors(props) {  
    return (
      <div> 
        <div>Text Colors</div>
        <div className="container">
        <div className="mt-5 p-3">
            <h3 className="text-primary">.text - primary &#9632; rgb(21,126,251) &#9632; #157efb</h3>
            <h3 className="text-secondary">.text - secondary &#9632; rgb(108,117,124) &#9632; #6c757c</h3>
            <h3 className="text-success">.text - success &#9632; rgb(48, 166, 74) &#9632; #30a64a</h3>
            <h3 className="text-danger">.text - danger &#9632; rgb(218, 56, 73) &#9632; #da3849</h3>
            <h3 className="text-warning">.text - warning &#9632; rgb(253, 192, 47) &#9632; #fdc02f</h3>
            <h3 className="text-info">.text - info &#9632; rgb(37, 162, 183) &#9632; #25a2b7</h3>
            <h3 className="text-dark">.text - dark &#9632; rgb(52,58,64) &#9632; #343a40</h3>
            <h3 className="text-body">.text - body &#9632; rgb(34, 37, 41) &#9632; #222529</h3>
            <h3 className="text-black-50">.text - black &#9632; 50 rgb(127,127,127) &#9632; #f7f7f7</h3>
           
       </div>
       <div className="mt-5 p-3 bg-dark">
            <h3 className="text-light">.text - light rgb(248,249,250) &#9632; #f8f9fa</h3>
            <h3 className="text-white-50">.text - white - 50 rgb(154, 157,160) &#9632; #9a9da0</h3>
            <h3 className="text-white">.text - white - rgb(255, 255, 255) &#9632; #ffffff</h3>
       </div>
        </div>
      </div>
    );
   
}

export default TextColors;

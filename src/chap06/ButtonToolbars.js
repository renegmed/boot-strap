import React from 'react';  

function ButtonToolbars(props) {  
    return (
      <div> 
        <div>Button Toolbars</div>
        <div class="container">
          <div class="mt-5">
    
            <div class="btn-toolbar">
              <div class="btn-group mr-2">
                <button class="btn btn-primary" type="button" >Alice</button>
                <button class="btn btn-success" type="button" >Dinah</button>
                <button class="btn btn-info" type="button" >White Rabbit</button>
              </div>
            
              <div class="btn-group mr-2">
                <button class="btn btn-primary" type="button" >Mad Hatter</button>
                <button class="btn btn-primary" type="button" >Dormouse</button>
                <button class="btn btn-primary" type="button" >March Hare</button>
              </div>
            
              <div class="btn-group">
                <button class="btn btn-primary" type="button" >Queen of Hearts</button>
                <button class="btn btn-primary" type="button" >King of Hearts</button>
              </div>
            </div>
     
          </div>
        </div>
      </div>
    );
   
}

export default ButtonToolbars;

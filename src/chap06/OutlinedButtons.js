import React from 'react';  

function OutlinedButtons(props) {  
    return (
      <div> 
        <div>Outlined Buttons with Color</div>
        <div class="container">
          <div class="mt-5">

          <ul>

            <li><button type="button" class="btn btn-outline-info">Primary Color: Alice</button></li>
            <li><button type="button" class="btn btn-outline-secondary">Secondary Color: Dinah</button></li>
            <li><button type="button" class="btn btn-outline-success">Success Color: Frog-Footman</button></li>
            <li><button type="button" class="btn btn-outline-info">Info Color: Mad Hatter</button></li>
            <li><button type="button" class="btn btn-outline-warning">Warning Color: White Rabbit</button></li>
            <li><button type="button" class="btn btn-outline-danger">Danger Color: Queen of Hearts</button></li>
            <li class="bg-dark p-2"><button type="button" class="btn btn-outline-light">Light Color: King of Hearts</button></li>
            <li><button type="button" class="btn btn-outline-dark">Dark Color: Mock Turtle</button></li>

          </ul>

          </div>
        </div>
      </div>
    );
   
}

export default OutlinedButtons;

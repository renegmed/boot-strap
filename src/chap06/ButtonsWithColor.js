import React from 'react';  

function ButtonsWithColor(props) {  
    return (
      <div> 
        <div>Buttons With Color</div>
        <div class="container">
          <div class="mt-5">

              <ul class="list-group list-group-flush">

                <li class="list-group-item">
                    <button type="button" class="btn btn-link">Just a plain text link</button>
                </li>
                <li class="list-group-item">
                    <button type="button" class="btn btn-primary">Primary Color: Alice</button>
                </li>
                <li class="list-group-item">
                    <button type="button" class="btn btn-secondary">Secondary Color: Dinah</button>
                </li>
                <li class="list-group-item">
                    <button type="button" class="btn btn-success">Success Color: Frog-Footman</button>
                </li>
                <li class="list-group-item">
                    <button type="button" class="btn btn-info">Info Color: Mad Hatter</button>
                </li>
                <li class="list-group-item">
                    <button type="button" class="btn btn-warning">Warning Color: White Rabbit</button>
                </li>
                <li class="list-group-item">
                    <button type="button" class="btn btn-danger">Danger Color: Queen of Hearts</button>
                </li>
                <li class="list-group-item bg-dark">
                    <button type="button" class="btn btn-light">Light Color: King of Hearts</button>
                </li>
                <li class="list-group-item">
                    <button type="button" class="btn btn-dark">Dark Color: Mock Turtle</button>
                </li>

              </ul>

          </div>
        </div>
      </div>
    );
   
}

export default ButtonsWithColor;

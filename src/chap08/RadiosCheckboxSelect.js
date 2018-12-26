import React from 'react';  

function RadiosCheckboxSelect(props) {  
    return (
      <div> 
        <div>Radios, Checkboxes, and Selection</div>
         
        <div class="container">          
          <h3 class="display-4 text-muted">Checkboxes, Radio Buttons &amp; Select Menus</h3>
          <div class="row">
            <div class="col-sm-9">
        
              <div class="input-group mb-3 mt-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input type="checkbox" aria-label="checkbox"/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="text input"/>
              </div> 
            
              <div class="input-group mb-3 mt-3">
                  <div class="input-group-prepend">
                      <div class="input-group-text">
                          <input type="radio" aria-label="radio"/>
                       </div>
                  </div>
                  <input type="text" class="form-control" aria-label="text input"/>
              </div>         
            
              <div class="form-group mt-5 mb-5">
                <label for="form-select">Character Select</label>
                <select multiple class="form-control" id="form-select">
                  <option>Alice</option>
                  <option>The White Rabbit</option>
                  <option>Mad Hatter</option>
                  <option>Dormouse</option>
                  <option>March Hare</option>
                </select>
              </div>

              <div class="input-group mb-5 mt-5">
                <div class="input-group-prepend">
                  <button class="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Characters</button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="/">Alice</a>
                    <a class="dropdown-item" href="/">The White Rabbit</a>
                    <div role="separator" class="dropdown-divider"></div>
                    <a class="dropdown-item" href="/">Mad Hatter</a>
                    <a class="dropdown-item" href="/">Dormouse </a>
                    <a class="dropdown-item" href="/">The March Hare</a>
                  </div>

                </div>
                <input type="text" class="form-control" aria-label="dropdown button"/>
              </div>      
            
             
            </div>
            <div class="col-sm-3">
              <img src="../img/cards.jpg" alt="cards" class="img-fluid"/>
            </div>                                             
          </div>      
        </div>
      </div>
    );
   
}

export default RadiosCheckboxSelect;
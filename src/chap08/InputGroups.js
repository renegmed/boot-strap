import React from 'react';  

function InputGroups(props) {  
    return (
      <div> 
        <div>Input Groups</div>
        <div class="container">          
       <h3 class="display-4 text-muted">Input Groups and Add Ons</h3>
    <div class="row">
        <div class="col-sm-9">
        
          <div class="input-group mb-5">
             <div class="input-group-prepend">
                 <button class="btn btn-success" type="button">Go!</button>
             </div>
              <input type="text" class="form-control" placeholder="Down the rabbit hole..." aria-label="Down the rabbit hole" aria-describedby="prepend"/>
          </div>
          
          <div class="input-group mb-5">
             <div class="input-group-prepend">
                 <button class="btn btn-success" type="button">Go!</button>
                 <button class="btn btn-info" type="button">Now!</button>
             </div>
              <input type="text" class="form-control" placeholder="Down the rabbit hole..." aria-label="Down the rabbit hole" aria-describedby="prepend"/>
          </div>
          
          
          
          <div class="input-group mb-5">
             
              <input type="text" class="form-control" placeholder="Down the rabbit hole..." aria-label="Down the rabbit hole" aria-describedby="append"/>
              <div class="input-group-append">
                 <button class="btn btn-success" type="button">Go!</button>
             </div>
          </div>
          
          <div class="input-group mb-5">
             
              <input type="text" class="form-control" placeholder="Down the rabbit hole..." aria-label="Down the rabbit hole" aria-describedby="append"/>
              <div class="input-group-append">
                 <button class="btn btn-success" type="button">Go!</button>
                 <button class="btn btn-info" type="button">Now!</button>
             </div>
          </div>
          

             
             <div class="input-group mb-5 mt-5">
                 <div class="input-group-prepend">
                     <span class="input-group-text">Go!</span>
                 </div>
                 <input type="text" class="form-control" placeholder="Down the rabbit hole..." aria-label="Down the rabbit hole" aria-describedby="append"/>
                 <div class="input-group-append">
                     <span class="input-group-text">Now!</span>
                 </div>
             </div>
             
             <div class="input-group input-group-sm mb-2">
              <div class="input-group-prepend">
                <span class="input-group-text" id="default-size">Default</span>
              </div>
              <input type="text" class="form-control" aria-label="Default" aria-describedby="default-size"/>
            </div>
             
             
             <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="default-size">Default</span>
              </div>
              <input type="text" class="form-control" aria-label="Default" aria-describedby="default-size"/>
            </div>
            
            <div class="input-group input-group-lg mb-5">
              <div class="input-group-prepend">
                <span class="input-group-text" id="default-size">Default</span>
              </div>
              <input type="text" class="form-control" aria-label="Default" aria-describedby="default-size"/>
            </div>
             
          </div>

        
        <div class="col-sm-3">
            <img src="../img/duchess.png" alt="duchess" class="img-fluid"/>
        </div>                                             
    </div>      
    </div>
      </div>
    );
   
}

export default InputGroups;
import React from 'react';  

function InlineForms(props) {  
    return (
      <div> 
        <div>Inline Forms</div>
        <div class="container">          
          <h3 class="display-4 text-muted">Inline Forms with the Cheshire Cat</h3>
          <div class="row">
              <div class="col-sm-10">

              <form class="form-inline">
                  <input type="text" class="form-control mr-2" id="username" placeholder="Your cat's name"/>
                  <input type="text" class="form-control mr-2" id="password" placeholder="Password"/>
                  <div class="form-check">
                      <label class="form-check-label mr-2">
                          <input type="checkbox" class="form-check-input"/>&ldquo;We&rsquo;re all mad here.&rdquo;
                      </label>
                  </div>

                  <button type="submit" class="btn btn-warning mt-3">Submit</button>
              </form>

              </div>
              <div class="col-sm-2">
                  <img src="../img/cat.png" alt="cat" class="img-fluid"/>
              </div>                                             
          </div>      
        </div>
      </div>
    );
   
}

export default InlineForms;
import React from 'react';  

function MultiColumnForms(props) {  
    return (
      <div> 
        <div>Multi-column Forms</div>
        <div class="container">          
          <h3 class="display-4 text-muted">Multi-Column Forms</h3>
          <div class="row">
              <div class="col-sm-9">

                  <form>
                      <div class="form-row">
                          <div class="col">
                              <input type="text" class="form-control" placeholder="Mad"/>
                          </div>
                          <div class="col">
                              <input type="text" class="form-control" placeholder="Hatter"/>
                          </div>
                      </div>
                  </form> 

              </div>
              <div class="col-sm-3">
                  <img src="../img/hatter.jpg" alt="hatter" class="img-fluid"/>
              </div>                                             
          </div>      
        </div>
      </div>
    );
   
}

export default MultiColumnForms;
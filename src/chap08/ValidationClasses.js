import React from 'react';  

function ValidationClasses(props) {  
    return (
      <div> 
        <div>Validation Classes</div>
        <div class="container">          
          <h3 class="display-4 text-muted">Validation Classes</h3>
          <div class="row">
            <div class="col-sm-9">

                <form>

                    <div class="form-group">
                        <label for="username">The Queen of Hearts</label>
                        <input type="text" id="queen" class="form-control is-valid"/>
                    </div>

                    <div class="form-group">
                        <label for="username">The King of Hearts</label>
                        <input type="text" id="king" class="form-control is-invalid"/>
                        <div class="invalid-feedback">
                            Off with your head.
                        </div>
                    </div>

                </form> 

            </div>
            <div class="col-sm-3">
                <img src="../img/queen.jpg" alt="queen" class="img-fluid"/>
            </div>                                             
          </div>    
        </div>
      </div>
    );
   
}

export default ValidationClasses;

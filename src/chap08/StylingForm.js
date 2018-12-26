import React from 'react';  

function StylingForm(props) {  
    return (
      <div> 
        <div>Styling Form</div>
        <div className="container">
          
          <h3 className="display-4 text-muted">Wonderland Contact Form</h3>
          <div className="row">

            <div className="col-sm-9">
              <form>
                <div className="form-group">
                  <label for="name">Character's Name</label>
                  <input className="form-control" type="text" id="name" placeholder="Enter your character's name"/>
                </div>


                <div className="form-group">
                  <label for="email">Character's Email Address</label>
                  <input className="form-control" type="email" id="email" placeholder="Enter your character's email address"/>
                  <small className="form-text text-muted">Your character's email will not be shared with anyone.</small>
                </div>

                <div className="form-group">
                  <label for="password">Character's Password</label>
                  <input className="form-control" type="password" id="password" placeholder="Password" readonly/>
                </div>

                <div className="form-group">
                  <label for="species">Species</label>
                  <select id="species" className="form-control">
                    <option>Human</option>
                    <option>Non-Human</option>
                  </select>
                </div>

                <div className="form-group">
                  <label for="message">Message for the Queen of Hearts</label>
                  <textarea className="form-control" id="message" rows="3"></textarea>
                </div>

                <div className="form-group">
                  <label for="file">Upload a file</label>
                  <input className="form-control-file btn btn-warning" type="file" id="file" />
                  <small className="form-text text-muted" id="helpFile">Maximum size is three yottabytes.</small>
                </div>

                <button type="submit" className="btn btn-success">Submit</button>         


              </form>
            </div>                                    
          </div>
        
          <div className="col-sm-3">
            <img src="../img/rabbit.jpeg" alt="rabbit" className="img-fluid"/>
          </div>
        </div>                                             
                
      </div>
    );
   
}

export default StylingForm;

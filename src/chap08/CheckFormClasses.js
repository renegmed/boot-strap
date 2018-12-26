import React from 'react';  

function CheckFormClasses(props) {  
    return (
      <div> 
        <div>Check Form Classes</div>
          
        <div className="container">          
          <h3 className="display-4 text-muted">A Famous Riddle</h3>
          <div className="row">
            <div className="col-sm-9">
              <form>
                <fieldset className="form-group">
                    <legend>Why is a raven like a writing-desk?</legend>
                    <div className="form-check">
                      <label className="form-check-label">
                          <input type="radio" className="form-check-input" name="answers" value="option1"/>
                          I haven’t the slightest idea
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                          <input type="radio" className="form-check-input" name="answers" value="option1"/>
                          I give it up
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                          <input type="radio" className="form-check-input" name="answers" value="option1"checked/>
                          Because it can produce a few notes, tho they are very flat
                      </label>
                    </div>
                </fieldset>
                <div className="form-check">
                    <label className="form-check-label">
                    <input type="checkbox" className="form-check-input"/>
                        I dislike the book <em>Alice&rsquo;s Adventures in Wonderland</em> very much.
                    </label>
                </div>
                    <button className="btn btn-info mt-3" type="submit">Submit</button>
              </form> 

            </div>
            <div className="col-sm-3">
                <img src="../img/hatter.jpg" alt="hatter" className="img-fluid"/>
            </div>                                             
        </div>   
        </div>
      </div>
    );
   
}

export default CheckFormClasses;
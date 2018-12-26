import React from 'react';  

function SetupHTMLForm(props) {  
    return (
      <div> 
        <div>Setting up HTML Form</div>
        <div className="container"> 

          <h3>Wonderland Contact Form</h3>


          <form>
          <div>
              <label for="name">Character's Name</label>
              <input type="text" id="name" placeholder="Enter your character's name"/>
          </div>


          <div>
              <label for="email">Character's Email Address</label>
              <input type="email" id="email" placeholder="Enter your character's email address"/>
              <small>Your character's email will not be shared with anyone.</small>
          </div>


          <div className="form-group">
          <label for="password">Character's Password</label>
          <input type="password" id="password" placeholder="Password" readonly/>
          </div>

          <div className="form-group">
          <label for="species">Species</label>
          <select id="species">
              <option>Human</option>
              <option>Non-Human</option>
          </select>
          </div>

          <div className="form-group">
          <label for="message">Message for the Queen of Hearts</label>
          <textarea id="message" rows="3"></textarea>
          </div>

          <div className="form-group">
          <label for="file">Upload a file</label>
          <input type="file" id="file"/>
          <small id="helpFile">Maximum size is three yottabytes.</small>
          </div>

          <button type="submit">Submit</button>         


          </form>                                  

        </div>
      </div>
    );
   
}

export default SetupHTMLForm;

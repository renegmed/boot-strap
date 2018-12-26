import React from 'react';  

function ButtonsWithTags(props) {  
    return (
      <div> 
        <div>Making Buttons with Other Tags</div>
        <div class="container">
          <div class="mt-5">

            <a href="/" class="btn btn-success" role="button">Read Alice in Wonderland</a>
            <button class="btn btn-info" type="submit"> Read Alice in Wonderland</button>
            <input class="btn btn-primary" type="button" value="Alice"/>
            <input class="btn btn-danger" type="submit" value="Submit"/>
            <input class="btn btn-warning" type="reset" value="Reset"/>

            <hr class="m-5"/>

            <button class="btn btn-info btn-lg" type="submit"> Read Alice in Wonderland</button>
            <button class="btn btn-info" type="submit"> Read Alice in Wonderland</button>
            <button class="btn btn-info btn-sm" type="submit"> Read Alice in Wonderland</button>


            <hr class="m-5"/>

            <button class="btn btn-info btn-lg btn-block" type="submit"> Read Alice in Wonderland</button>
            <button class="btn btn-primary btn-lg btn-block" type="submit"> Read Through the Looking Glass</button>

            <hr class="m-5"/>  

            <button class="btn btn-primary" type="button" data-toggle="button">  Read Through the Looking Glass</button>

            <hr class="m-5"/> 


            <button class="btn btn-info" type="button"> Read Alice in Wonderland</button>
            <button class="btn btn-info active" type="button"> Read Alice in Wonderland</button>
            <button class="btn btn-info disabled" type="button"> Read Alice in Wonderland</button>

            <hr class="m-5"/> 



          </div>
        </div>
      </div>
    );
   
}

export default ButtonsWithTags;

import React from 'react';  

function Alerts(props) {  
    return (
      <div> 
        <div>Alerts</div>
         
        <div class="container">
          <div class="mt-5">

            <div class="alert alert-primary" ><strong>Alert Primary</strong>- <a href="/">Alice</a></div>
            <div class="alert alert-secondary" >Alert Secondary- Dinah</div>
            <div class="alert alert-success" >Alert Success- White Rabbit</div>
            <div class="alert alert-warning" >Alert Warning- Mad Hatter</div>
            <div class="alert alert-info" >Alert Info- Dormouse</div>
            <div class="alert alert-light" >Alert Light- March Hare</div>
            <div class="alert alert-danger" >Alert Danger- Queen of Hearts</div>
            <div class="alert alert-dark" >Alert Dark- King of Hearts</div>
        
            
            
            <div class="alert alert-warning alert-dismissable fade show">
                <button class="close" data-dismiss="alert" type="button"><span>&times;</span></button>
                Do you want to read the sequel <em>Through the Looking Glass</em>?
            </div>


          <hr class="m-5"/>



          </div>
        </div>
      </div>
    );
   
}

export default Alerts;

import React from 'react';  

function Breadcrumbs(props) {  
    return (
      
      <div class="container m-5">
       
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
               <li class="breadcrumb-item"><a href="/">Home</a></li>
               <li class="breadcrumb-item"><a href="/">Alice in Wonderland</a></li>
               <li class="breadcrumb-item"><a href="/">All Chapters</a></li>
               <li class="breadcrumb-item active"><a href="/">Chapter 7: A Mad Tea-Party</a></li>
            </ol> 
        </nav>
    
      </div>
    );
   
}

export default Breadcrumbs;
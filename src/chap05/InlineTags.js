import React from 'react';  

function InlineTags(props) {  
    return (
      <div> 
        <div>Inline Tags</div>
        <div className="container mt-3">
          <h1 className="display-4">List of Characters</h1>
          <ul>
            <li><mark>Alice</mark></li>
            <li><mark>Queen of Hearts</mark></li>
            <li><s>Cheshire Cat</s></li>
            <li><ins>Tweede Dee</ins></li>
            <li><u>Tweedle Dum</u></li>
            <li><small>Mad Hatter</small></li>
            <li><strong>White Rabbit</strong></li>
            <li><em>March Hare</em></li>
            <li>Big <sub>Catepillar</sub></li> 
          </ul>
        </div>
      </div>
    );
   
}

export default InlineTags;


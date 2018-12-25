import React from 'react';  

function ResponsiveFloats(props) {  
    return (
      <div> 
        <div>Responsive Floats</div>
 
        <div class="container">
        <h3 class="h4 xs mb-4">Extra-Small Devices &lt; 576px </h3>
        <h3 class="h4 sm mb-4">Small Devices &gt; 576px</h3>
        <h3 class="h4 md mb-4">Medium Devices &gt; 768px</h3>
        <h3 class="h4 lg mb-4">Large Devices &gt; 992px</h3>
        <h3 class="h4 xl mb-4">XL-Large Devices &gt; 1200px</h3>
        

        <p class="float-sm-right float-xl-left clearfix">&ldquo;Once,&rdquo;said the Mock Turtle<br/>at last, with a deep sigh,<br/>&ldquo;I was a real Turtle.&rdquo;</p>

        
        </div>

        <div class="container">
          <div class="clearfix">
              <button class="float-left">Left Float</button>
              <button class="float-right">Right Float</button>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus deleniti temporibus fugiat tenetur vel voluptates nobis, 
            enim blanditiis, cum ullam porro eum quam sint voluptatum sequi? Recusandae laudantium temporibus sunt.</p>
        </div>
      </div>
     
    );
   
}

export default ResponsiveFloats;


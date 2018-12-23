import React from 'react'; 
 
function Padding(props) { 
    return (
      
      <div className="container text-center">

        <div><b>Padding, Display, and Margins</b></div> 

        <hr/>
        <div>Item #1</div>
        <div className="height100px row" >
          <div className="col bg-transparent">1</div>
          <div className="col bg-info">2</div>
          <div className="col bg-transparent">3</div>
        </div>

        <hr/> 
        <div>Item #2</div>
        <div className="height100px row">
          <div className="col bg-info">4</div>
          <div className="col bg-primary text-light text-justify    ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores expedita ea perferendis? Lorem ipsum dolor sit amet. 
          </div>
          <div className="col bg-info">6</div>
        </div>     

        <hr/> 
        <div>Item #3</div>
        <div>Margin 2 (around)</div>
        <div className="height100px row">
          <div className="col bg-info">4</div>
          <div className="col bg-primary text-light text-justify  m-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores expedita ea perferendis? Lorem ipsum dolor sit amet. 
          </div>
          <div className="col bg-info">6</div>
        </div>  

        <hr/> 
        <div>Item #4</div>
        <div>Top margin 1</div>
        <div className="height100px row">
          <div className="col bg-info">4</div>
          <div className="col bg-primary text-light text-justify  mt-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores expedita ea perferendis? Lorem ipsum dolor sit amet. 
          </div>
          <div className="col bg-info">6</div>
        </div>  

        <hr/> 
        <div>Item #5</div>
        <div>Top margin 5</div>
        <div className="height100px row">
          <div className="col bg-info">4</div>
          <div className="col bg-primary text-light text-justify  mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores expedita ea perferendis? Lorem ipsum dolor sit amet. 
          </div>
          <div className="col bg-info">6</div>
        </div>  

        <hr/> 
        <div>Item #6</div>
        <div>Bottom margin 1</div>
        <div className="height100px row">
          <div className="col bg-info">4</div>
          <div className="col bg-primary text-light text-justify  mb-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores expedita ea perferendis? Lorem ipsum dolor sit amet. 
          </div>
          <div className="col bg-info">6</div>
        </div>  
 
        <hr/> 
        <div>Item #7</div>
        <div>Bottom margin 5</div>
        <div className="height100px row">
          <div className="col bg-info">4</div>
          <div className="col bg-primary text-light text-justify  mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores expedita ea perferendis? Lorem ipsum dolor sit amet. 
          </div>
          <div className="col bg-info">6</div>
        </div>  

        <hr/> 
        <div>Item #8</div>
        <div>Perimeter margin 1</div>
        <div className="height100px row">
          <div className="col bg-info">4</div>
          <div className="col bg-primary text-light text-justify  p-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores expedita ea perferendis? Lorem ipsum dolor sit amet. 
          </div>
          <div className="col bg-info">6</div>
        </div>  

        <hr/> 
        <div>Item #8</div>
        <div>Perimeter margin 5</div>
        <div className="height100px row">
          <div className="col bg-info">4</div>
          <div className="col bg-primary text-light text-justify  p-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores expedita ea perferendis? Lorem ipsum dolor sit amet. 
          </div>
          <div className="col bg-info">6</div>
        </div>  


        <hr/> 
        <div>Item #10</div>
        <div>Perimeter margin 0</div>
        <div className="height100px row">
          <div className="col bg-info">4</div>
          <div className="col bg-primary text-light text-justify  p-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores expedita ea perferendis? Lorem ipsum dolor sit amet. 
          </div>
          <div className="col bg-info">6</div>
        </div>  


        <hr/> 
        <div>Item #11</div>
        <div className="height100px row">
          <div className="col bg-transparent">7</div>
          <div className="col bg-info">8</div>
          <div className="col bg-transparent">9</div>
        </div>         
              
        <hr/>
        <div>Item #12</div>             
        <span className="px-2 bg-warning ">Span Inline Element</span>     
        <span className="px-2 bg-secondary">Span Inline Element</span>     
             
        <hr/>
        <div>Item #13</div>             
        <span className="px-2 bg-warning d-block">Span Inline Element</span>     
        <span className="px-2 bg-secondary">Span Inline Element</span>     

        <hr/>
        <div>Item #14</div>
        <div className="bg-info">Div Block Element</div>
        <div className="bg-success">Div Block Element</div>
             
        <hr/>
        <div>Item #15</div>
        <div className="d-inline bg-info">Div Block Element</div>
        <div className="d-inline bg-success">Div Block Element</div>

        <br/>

      </div>
    );
   
}

export default Padding;
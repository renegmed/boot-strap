import React from 'react'; 
 
function GridSystems(props) { 
    return (
      <div> 
         <div>Bootstrap Grid System</div>
         <section className="container">
             <section className="row">
                 <div className="myDiv3 col">Equal</div>
                 <div className="myDiv3 col">Equal</div>
                 <div class="myDiv3 w-100"></div>
                 <div className="myDiv3 col">Equal</div>
                 <div className="myDiv3 col">Equal</div>
                 
             </section>
         </section>
         <section className="container">
             <section className="row">
                 <div className="myDiv3 col-sm">Auto</div>
                 <div className="myDiv3 col-sm">Auto</div> 
                 <div className="myDiv3 col-sm">Auto</div> 
             </section>
         </section>
      </div>
    );
   
}

export default GridSystems;
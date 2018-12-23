import React from 'react'; 
 
function GridSystems(props) { 
    return (
      <div> 
         <div>Bootstrap Grid System</div>

         <div><b>Grid 1</b></div>
         <section className="container">
             <section className="row">
                 <div className="myDiv3 col">Equal</div>
                 <div className="myDiv3 col">Equal</div>
                 <div class="myDiv3 w-100"></div>
                 <div className="myDiv3 col">Equal</div>
                 <div className="myDiv3 col">Equal</div>
                 
             </section>
         </section>
         
         <hr/>
         <div><b>Grid 2</b></div>
         <section className="container">
             <section className="row">
                 <div className="myDiv3 col-sm">Auto</div>
                 <div className="myDiv3 col-sm">Auto</div> 
                 <div className="myDiv3 col-sm">Auto</div> 
             </section>
         </section>

         <hr/>
         <div><b>Grid 3</b></div>
         <section className="container">
             <div className="row">
                 <div className="myDiv3 col">Auto</div>
                 <div className="myDiv3 col-8">Auto</div> 
                 <div className="myDiv3 col-3">Auto</div> 
             </div>
         </section>

         <hr/>
         <div><b>Grid 4</b></div>
         <section className="container">
             <div className="row">
                 <div className="myDiv3 col-sm order-3">First</div>
                 <div className="myDiv3 col-sm order-1">Second</div> 
                 <div className="myDiv3 col-sm order-2">Third</div> 
             </div>
         </section>

         <hr/>
         <div><b>Grid 5</b></div>
         <section className="container">
             <div className="row">
                 <div className="myDiv4 col bg-warning">First</div>
                 <section className="row">
                    <div className="myDiv4 col bg-info">Second</div> 
                    <div className="myDiv4 col bg-success">Third</div> 
                 </section>
                 
             </div>
         </section>
         
         <hr/>
         <div><b>Grid 6</b></div>
         <section className="container">
             <div className="row">
                 <div className="myDiv4 col-sm-6 col-md-7 col-lg-8 col-xl-10 bg-warning">
                    <p>SM: 567px<br/>MD: 768px<br/>LG: 992px<br/>XL: 1200px</p>
                 </div> 
             </div>
         </section>

         <hr/>
         <div><b>Grid 7</b></div>
         <section className="container">
             <section className="row">
                <div className="myDiv4 col-6 bg-info">1</div>
                <div className="myDiv4 col-6 bg-secondary">2</div>
             </section>
             <section  className="row">
                <div className="myDiv4 col-4 bg-info">1</div>
                <div className="myDiv4 col-4 bg-secondary">2</div>
                <div className="myDiv4 col-4 bg-success">3</div>
             </section>
             <section  className="row">
                <div className="myDiv4 col-3 bg-info">1</div>
                <div className="myDiv4 col-3 bg-secondary">2</div>
                <div className="myDiv4 col-3 bg-success">3</div>
                <div className="myDiv4 col-3 bg-danger">4</div>
             </section>
         </section>

      </div>
    );
   
}

export default GridSystems;
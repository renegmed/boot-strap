import React from 'react';  

function Jumbotron(props) {  
    return (
      <div> 
        <div>Jumbotron</div>
         
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">See Jumbo the Elephant!</h1>
            <p className="lead text-secondary">P. T. Barnum presents the largest living quadruped on Earth. </p>
          </div>
        </div>
        
        <div className="container">
        
        
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 ">See Jumbo the Elephant!</h1>
            <p className="lead text-secondary">P. T. Barnum presents the largest living quadruped on Earth.</p>
          </div>
        </div>
          
        <div className="jumbotron">
            <h1 className="display-4">See Jumbo the Elephant</h1>
            <p className="lead text-secondary">P. T. Barnum presents the largest living quadruped on Earth. The mighty king of all the beasts.</p>
            <hr className="my-4"/>
            <p>This towering monster among all the hugest elephants is really a historic mammoth. A theme of absorbing interest to many hundred millions at Phineas Taylor Barnum's greatest show on earth.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Buy Tickets Here</a>
        </div>
           
            
        
        </div>
      </div>
    );
   
}

export default Jumbotron;
import React from 'react';  

function Badges(props) {  
    return (
      <div> 
        <div>Badges</div>
         
        <div className="container">
          <div className="mt-5">

            <h1>Some Poetry by Lewis Carroll <span className="badge badge-primary">New</span></h1>
            <button type="button" className="btn btn-block btn-success btn-large">Number of Lewis Carroll poems here. <span className="badge badge-dark"> 20</span></button>
            <hr className="m-3"/>
            <a href="/" className="badge badge-primary">Jabberwocky</a>
            <a href="/" className="badge badge-secondary">A Strange Wild Song</a>
            <a href="/" className="badge badge-success">The Crocodile</a>
            <a href="/" className="badge badge-danger">A Game Of Fives</a>
            <a href="/" className="badge badge-warning">My Fancy</a>
            <a href="/" className="badge badge-info">Brother And Sister</a>
            <a href="/" className="badge badge-light">Little Birds</a>
            <span className="badge badge-info"><a href="/" className="badge badge-dark">You Are Old, Father William</a></span>
            <hr className="m-3"/>
            <span className="badge badge-info badge-pill">Jabberwocky</span>
            <span className="badge badge-info badge-pill">A Strange Wild Song</span>
            <span className="badge badge-info badge-pill">The Crocodile</span>
            <span className="badge badge-info badge-pill">A Game Of Fives</span>
            <span className="badge badge-info badge-pill">My Fancy</span>
            <span className="badge badge-info badge-pill">Brother And Sister</span>
            <span className="badge badge-info badge-pill">Little Birds</span>
            <span className="badge badge-info badge-pill">You Are Old, Father William</span>
            <hr className="m-3"/>


          </div>
        </div>
      </div>
    );
   
}

export default Badges;

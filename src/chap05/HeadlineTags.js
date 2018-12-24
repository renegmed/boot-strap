import React from 'react';  

function HeadlineTags(props) {  
    return (
      <div> 
        <div>Headline Tags</div>
        <hr/>
        <div>item #1</div>
        <div className="container">
          <h1 className="h4">Man Bites Dog</h1>
          <h2 className="h4">Camouflaged Army Vehicle Disappears</h2>
          <h3 className="h4">Woman Missing Since She Got Lost</h3>
          <h4 className="h4">Safety Meeting Ends in Accident</h4>
          <h5 className="h4">Attorney Accidentally Sues Herself</h5>
          <h6 className="h4">Woman Still Alive Hours Before She Died</h6>
        </div>

        <hr/>
        <div>item #2</div>
        <div className="container">
          <h1 className="text-uppercase">Man Bites Dog</h1>
          <h2 className="text-uppercase">Camouflaged Army Vehicle Disappears</h2>
          <h3 className="text-uppercase">Woman Missing Since She Got Lost</h3>
          <h4 className="text-uppercase">Safety Meeting Ends in Accident</h4>
          <h5 className="text-uppercase">Attorney Accidentally Sues Herself</h5>
          <h6 className="text-uppercase">Woman Still Alive Hours Before She Died</h6>
        </div>

        <hr/>
        <div>item #3</div>
        <div className="container">
          <h1 className="text-capitalize">Man Bites Dog</h1>
          <h2 className="text-capitalize">Camouflaged Army Vehicle Disappears</h2>
          <h3 className="text-capitalize">Woman Missing Since She Got Lost</h3>
          <h4 className="text-capitalize">Safety Meeting Ends in Accident</h4>
          <h5 className="text-capitalize">Attorney Accidentally Sues Herself</h5>
          <h6 className="text-capitalize">Woman Still Alive Hours Before She Died</h6>
        </div>

        <hr/>
        <div>item #4</div>
        <div className="container">
          <h3>Man Bites Dog 
            <small className="text-muted"> Dog Bites Man</small>
          </h3> 
        </div>

        <hr/>
        <div>item #5</div>
        <div className="container">
          <h1 className="display-1">Man Bites Dog</h1> 
          <h1 className="display-2">Man Bites Dog</h1> 
          <h1 className="display-3">Man Bites Dog</h1> 
          <h1 className="display-4">Man Bites Dog</h1> 
          <h1 className="display-5">Man Bites Dog</h1> 
        </div>
      </div>
    );
   
}

export default HeadlineTags;


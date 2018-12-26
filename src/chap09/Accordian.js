import React from 'react';  

function Accordian(props) {  
    return (
      <div> 
        <div>Accordian</div>
         
          <div className="container mt-5">
            
            <div className="accordian" id="accordianExample">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Alice Quote
                            </button>
                        </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordianExample">
                        <div className="card-body">
                            &ldquo;It was all very well to say &lsquo;Drink me,&rsquo;&rdquo; but the wise little Alice was not going to do that in a hurry. &ldquo;No, I’ll look first,&rdquo; she said, &ldquo;and see whether it’s marked &lsquo;poison&rsquo; or not.&rdquo; <br/><em>&mdash; Alice</em>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              The Duchess Quote
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordianExample">
                        <div className="card-body">
                            &ldquo;If everybody minded their own business,&rdquo; the Duchess said, in a hoarse growl, &ldquo;the world would go round a deal faster than it does.&rdquo; <br/><em>&mdash; The Dutchess</em>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              King of Hearts Quote
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordianExample">
                        <div className="card-body">
                            &ldquo;If there&rsquo;s no meaning in it,&rdquo; said the King, &ldquo;that saves a world of trouble, you know, as we needn&rsquo;t try to find any.&rdquo;<br/><em>&mdash; The King of Hearts</em>
                        </div>
                    </div>
                </div>
            </div>
          
          
          
          
          
          
          </div>
      </div>
    );
   
}

export default Accordian;
import React from 'react';  

function Collapse(props) {  
    return (
      <div> 
        <div>Collapse</div>
         
        <div className="container mt-5">
            <p>
              <a className="btn btn-info" data-toggle="collapse" href="#collapseAnchor" role="button" aria-expanded="false" aria-controls="collapseIt">
                Anchor Alice
              </a>
            </p>
            <div className="collapse" id="collapseAnchor">
              <div className="card card-body">
                <p><img src="../img/alice.jpg" className="image-fluid float-left clearfix" />&ldquo;I wonder if I&rsquo;ve been changed in the night. Let me think. Was I the same when I got up this morning? I almost think I can remember feeling a little different. But if I&rsquo;m not the same, the next question is &lsquo;Who in the world am I?&rsquo; Ah, that&rsquo;s the great puzzle!&rdquo;</p>
              </div>
            </div>
            
            <hr className="mt-5"/>
            
            <p>
              <button className="btn btn-success" type="button" data-toggle="collapse" data-target="#collapseButton" aria-expanded="false" aria-controls="collapseIt">
                Button Alice
              </button>
            </p>
            <div className="collapse" id="collapseButton">
              <div className="card card-body">
                
                <p><img src="../img/alice.jpg" className="image-fluid float-right clearfix"/>&ldquo;I wonder if I&rsquo;ve been changed in the night. Let me think. Was I the same when I got up this morning? I almost think I can remember feeling a little different. But if I&rsquo;m not the same, the next question is &lsquo;Who in the world am I?&rsquo; Ah, that&rsquo;s the great puzzle!&rdquo;</p>
              </div>
            </div>
            
            
        
        </div>
      </div>
    );
   
}

export default Collapse;
import React from 'react';  

function Carousels(props) {  
    return (
      <div> 
        <div>Carousels</div>
        <div className="container">
  
  
          <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators ">
              <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselIndicators" data-slide-to="1"></li>
              <li data-target="#carouselIndicators" data-slide-to="2"></li>
              <li data-target="#carouselIndicators" data-slide-to="3"></li>
            </ol>
         
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="../img/image1.jpg" alt="First slide"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>The King from <em>Through the Looking-Glass</em></h5>
                    <p>&ldquo;You alarm me!&rdquo; said the King. &ldquo;I feel faint &mdash; Give me a ham sandwich!&rdquo;</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="../img/image2.jpg" alt="Second slide"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Wool and Water</h5>
                    <p>&ldquo;How am I to stop it?&rdquo; said the Sheep. &ldquo;If you leave off rowing, it&rsquo;ll stop of itself.&rdquo;</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="../img/image3.jpg" alt="Third slide"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5><em>Alice entering the Looking-Glass.</em></h5>
                    <p>In another moment Alice was through the glass, and had jumped lightly down into the Looking-glass room.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="../img/image4.jpg" alt="Fourth slide"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5><em>The Walrus and the Carpenter</em></h5>
                    <p>&ldquo;I like the Walrus best,&rdquo; said Alice, &ldquo;because you see he was a little sorry for the poor oysters.&rdquo;</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>  
        </div>
      </div>
    );
   
}

export default Carousels;
import React from 'react';  

function HandcodedNavbar(props) {  
    return (
      <div> 
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#top">Navbar</a>
              <button className="navbar-toggler navbar-toggler-right" 
                  type="button" 
                  data-toggle="collapse" 
                  data-target="#navbarResponsive"
                  aria-controls="navbarResponsive"
                  aria-expanded="false"
                  aria-label="Toggle Navigation">Menu <i className="fa fa-bars"></i></button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                  <li className="nav-item active"><a className="nav-link js-scroll-trigger" href="#link1">Link1</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#link2">Link2</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#link3">Link3</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#link4">Link4</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#link5">Link5</a></li>
                </ul>
              </div>
            </div>
          </nav>
        <header className="masthead"> 
          <div className="container">
            <div className="intro-text"></div>
          </div>
        </header>
      </div>
    );
   
}

export default HandcodedNavbar;
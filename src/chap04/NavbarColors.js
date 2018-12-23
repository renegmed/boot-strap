import React from 'react';  

function NavbarColors(props) {  
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
                  <li className="navbar-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/"
                        id="navDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div className="dropdown-menu" aria-labelledby="navDropdown">
                      <a className="dropdown-item" href="/" >Sub-Link 1</a>
                      <a className="dropdown-item" href="/" >Sub-Link 2</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="/" >Sub-Link 3</a>
                    </div>
                  </li>  
                  <li className="nav-item active"><a className="nav-link js-scroll-trigger" href="#link1">Link1</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#link2">Link2</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#link3">Link3</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#link4">Link4</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#link5">Link5</a></li>
                  
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
                  </form>

                </ul>
              </div>
            </div>
        </nav>
        <header className="masthead"> 
          <div className="container">
            <div className="intro-text"></div>
          </div>
        </header>
        <div className="container m-5">
          <ul className="nav nav-pills nav-fill">
          <li class="nav-item dropdown">
            <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Hearts Dropdown</a>
            <div className="dropdown-menu">
              <a href="/" className="dropdown-item">The Queen</a>
              <a href="/" className="dropdown-item">The King</a>
              <a href="/" className="dropdown-item">The Jack</a>
            </div>
          </li>
            <li className="nav-item"><a href="/" className="nav-link">Alice</a></li>
            <li className="nav-item"><a href="/" className="nav-link">The Hatter</a></li>
            <li className="nav-item"><a href="/" className="nav-link">Dormouse</a></li>
            <li className="nav-item"><a href="/" className="nav-link">March Hare</a></li>
            <li className="nav-item"><a href="/" className="nav-link">Dinah</a></li> 
          </ul>

        </div>
      </div>
    );
   
}

export default NavbarColors;
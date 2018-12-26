import React from 'react';  

function RadioCheckbox(props) {  
    return (
      <div> 
        <div>Radio and Checkbox Buttons</div>
         
        <div className="container">
          <div className="mt-5">
    
            <div className="btn-group">
              <button className="btn btn-success" type="button">Chapter 1</button>
              <button className="btn btn-info" type="button">Chapter 2</button>
              <button className="btn btn-success" type="button">Chapter 3</button>
            </div>

            <hr className="m-5"/>

            <div className="btn-group-vertical">
              <button className="btn btn-success" type="button">Chapter 1</button>
              <button className="btn btn-success" type="button">Chapter 2</button>
              <button className="btn btn-success" type="button">Chapter 3</button>
            </div>

            <hr className="m-5"/>   

            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
            Read Alice in Wonderland</button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">Chapter 1</a>
                    <a className="dropdown-item" href="/">Chapter 2</a>
                    <a className="dropdown-item" href="/">Chapter 3</a>
                </div>
            <hr className="m-5"/>   

            <div className="btn-group">  
            <button className="btn btn-secondary" type="button">About Lewis Carroll</button>
            <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
              <span>Read Alice in Wonderland</span>
            </button>
               <div className="dropdown-menu">
                <a className="dropdown-item" href="/">Table of Contents</a>
                <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">Chapter 1</a>
                  <a className="dropdown-item" href="/">Chapter 2</a>
                  <a className="dropdown-item" href="/">Chapter 3</a>
                </div>
            </div>  

            <hr className="m-5"/> 
            <h3>My favorite characters</h3>
               <div className="btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-info active"><input type="checkbox" autocomplete="off"/>Alice</label>
                    <label className="btn btn-info"><input type="checkbox" autocomplete="off"/>Mad Hatter</label>
                    <label className="btn btn-info"><input type="checkbox" autocomplete="off"/>White Rabit</label>
                    <label className="btn btn-info"><input type="checkbox" autocomplete="off"/>Queen of Hearts</label>
                </div>
            <hr className="m-5"/>
            <h3>Chapters I have finished</h3>
            <div className="btn-group btn-group-toggle" data-toggle="button">
                <label className="btn btn-success "><input type="radio" classname="options" id="option1" autocomplete="off"/>Chapter 1</label>
                <label className="btn btn-success"><input type="radio" classname="options" id="option1" autocomplete="off"/>Chapter 2</label>
                <label className="btn btn-success"><input type="radio" classname="options" id="option1" autocomplete="off"/>Chapter 3</label>
                <label className="btn btn-success"><input type="radio" classname="options" id="option1" autocomplete="off"/>Chapter 4</label>    
            </div>
            <hr className="m-5"/>
          </div>
          </div>
      </div>
    );
   
}

export default RadioCheckbox;

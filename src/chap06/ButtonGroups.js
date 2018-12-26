import React from 'react';  

function ButtonGroups(props) {  
    return (
      <div> 
        <div>Button Groups</div>
        <div class="container">
          <div class="mt-5">

            <div class="btn-group">
                <button class="btn btn-success" type="button">Chapter 1</button>
                <button class="btn btn-info" type="button">Chapter 2</button>
                <button class="btn btn-success" type="button">Chapter 3</button>
            </div>

            <hr class="m-5"/>

                <div class="btn-group-vertical">
                    <button class="btn btn-success" type="button">Chapter 1</button>
                    <button class="btn btn-success" type="button">Chapter 2</button>
                    <button class="btn btn-success" type="button">Chapter 3</button>
                </div>

            <hr class="m-5"/>   

            Read Alice in Wonderland
            Chapter 1
            Chapter 2
            Chapter 3


            About Lewis Carroll
            Read Alice in Wonderland
            Chapter 1
            Chapter 2
            Chapter 3

            My favorite characters
            Alice
            Mad Hatter
            White Rabit
            Queen of Hearts

            Chapters I have finished
            Chapter 1
            Chapter 2
            Chapter 3
            Chapter 4 
          </div>
        </div> 
      </div>
    );
   
}

export default ButtonGroups;

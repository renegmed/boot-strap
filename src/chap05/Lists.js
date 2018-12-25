import React from 'react';  

function Lists(props) {  
    return (
      <div> 
        <div>Lists</div>
 
        <div class="container mt-4">
      
          <h1 class="display-4">List of Characters</h1>

          <hr class="mt-5"/>
          <div>list #1</div>      
          <ul class="list-group">
            <li class="list-group-item">Alice</li>
            <li class="list-group-item">Queen of Hearts</li>
            <li class="list-group-item">Cheshire Cat</li>
            <li class="list-group-item">Tweedle Dee</li>
            <li class="list-group-item">Tweedle Dum</li>
            <li class="list-group-item">Mad Hatter</li>
            <li class="list-group-item">White Rabbit</li>
            <li class="list-group-item">March Hare</li>
          </ul>
          <hr class="mt-5"/>
          <div>list #1</div>      
          <ul class="list-group">
            <li class="list-group-item list-group-item-action">Alice</li>
            <li class="list-group-item list-group-item-action">Queen of Hearts</li>
            <li class="list-group-item list-group-item-action">Cheshire Cat</li>
            <li class="list-group-item list-group-item-action">Tweedle Dee</li>
            <li class="list-group-item list-group-item-action">Tweedle Dum</li>
            <li class="list-group-item list-group-item-action">Mad Hatter</li>
            <li class="list-group-item list-group-item-action">White Rabbit</li>
            <li class="list-group-item list-group-item-action">March Hare</li>
          </ul>

          <hr class="mt-5"/>  
          <div>list #2</div>     
          <ul class="list-group mt-5">
            <li class="list-group-item">Alice</li>
            <li class="list-group-item list-group-item-primary">Queen of Hearts</li>
            <li class="list-group-item list-group-item-secondary">Cheshire Cat</li>
            <li class="list-group-item list-group-item-success">Tweedle Dee</li>
            <li class="list-group-item list-group-item-info">Tweedle Dum</li>
            <li class="list-group-item list-group-item-warning">Mad Hatter</li>
            <li class="list-group-item list-group-item-danger">White Rabbit</li>
            <li class="list-group-item list-group-item-light">March Hare</li>
            <li class="list-group-item list-group-item-dark">Catepillar</li>
          </ul>

          <hr class="mt-5"/>
          <div>list #3</div>    
          <ul class="list-group mt-5 list-group-flush">
            <li class="list-group-item d-flex justify-content-between align-items-center">Alice <span class="badge badge-primary">40</span></li>
            <li class="list-group-item">Queen of Hearts</li>
            <li class="list-group-item">Cheshire Cat</li>
            <li class="list-group-item">Tweedle Dee</li>
            <li class="list-group-item">Tweedle Dum</li>
            <li class="list-group-item">Mad Hatter</li>
            <li class="list-group-item">White Rabbit</li>
            <li class="list-group-item">March Hare</li>
          </ul>

          <hr class="mt-5"/>
          <div>list #4</div>
          <ul class="list-unstyled">
            <li>Alice</li>
            <li>Queen of Hearts</li>
            <li>Cheshire Cat</li>
            <li>Tweedle Dee</li>
            <li>Tweedle Dum</li>
            <li>Mad Hatter</li>
            <li>White Rabbit</li>
            <li>March Hare</li>
          </ul>
          <hr class="mt-5"/>
          <ul class="list-inline">
            <li class="list-inline-item">Alice</li>
            <li class="list-inline-item">Queen of Hearts</li>
            <li class="list-inline-item">Cheshire Cat</li>
            <li class="list-inline-item">Tweedle Dee</li>
            <li class="list-inline-item">Tweedle Dum</li>
            <li class="list-inline-item">Mad Hatter</li>
            <li class="list-inline-item">White Rabbit</li>
            <li class="list-inline-item">March Hare</li>
          </ul>


          <hr class="mt-5"/>
          <div>list #5</div>
          <dl class="row">
            <dt class="col-sm-3">Alice</dt>
            <dd class="col-sm-9">The main character who travels to wonderland</dd>

            <dt class="col-sm-3">Dinah</dt>
            <dd class="col-sm-9">Alice's cat who is never actually seen in the story. The cat is very good at hunting, or so Alice says.
            </dd>

            <dt class="col-sm-3">Mary Ann</dt>
            <dd class="col-sm-9">The housemaid of the White Rabbit. Alice is confused by the White Rabbit for Mary Ann</dd>

            <dt class="col-sm-3 text-truncate">The old crab with its daughter and several birds</dt>
            <dd class="col-sm-9">They fell into Alice's pool of tears.</dd>

            <dt class="col-sm-3">Tea Party Goers</dt>
            <dd class="col-sm-9">
                <dl class="row">
                    <dt class="col-sm-4">The March Hare.</dt> 
                    <dd class="col-sm-8">He is holding a tea party with the Hatter and the Dormouse.</dd> 
                    <dt class="col-sm-4">Mad Hatter</dt> 
                    <dd class="col-sm-8">A guest at the tea part hosted by the March Hare.</dd>
                </dl>
            </dd>

          </dl>
        </div>
      </div>
    );
   
}

export default Lists;


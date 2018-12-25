import React from 'react';  

function ListGroups(props) {  
    return (
      <div> 
        <div>List Groups</div>
 
        <header className="masthead">
          <div className="container">
            <div className="intro-text"></div>
          </div>
        </header>
    
    
        <div className="container mt-4">
      
          <h1>Alice’s Adventures in Wonderland</h1>
    
          <div className="row mt-5">
            <div className="col-4">
               <div className="list-group mb-5" id="list-tab" role="tablist">
                   <a href="#list-chap1" id="list-chap1-list" data-toggle="list" className="list-group-item list-group-item-action active">Chapter 1</a>
                   <a href="#list-chap2" id="list-chap2-list" data-toggle="list" className="list-group-item list-group-item-action">Chapter 2</a>
                   <a href="#list-chap3" id="list-chap3-list" data-toggle="list" className="list-group-item list-group-item-action">Chapter 3</a>
               </div>
            </div> 
            <div className="col-8">
                <div className="tab-content" id="nav-tabContent">
                    <div role="tabpanel" id="list-chap1" className="tab-pane fade show active">
                        <h3>Down the Rabbit-Hole</h3>

                         <p>Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, &ldquo;and what is the use of a book,&rdquo; thought Alice &ldquo;without pictures or conversations?&ldquo;&#8230;</p>
                    </div>
                    <div role="tabpanel" id="list-chap2" className="tab-pane fade">
                        <h3>The Pool of Tears</h3>

                         <p>&ldquo;Curiouser and curiouser!&rdquo; cried Alice (she was so much surprised, that for the moment she quite forgot how to speak good English); &ldquo;now I&rsquo;m opening out like the largest telescope that ever was! Good-bye, feet!&rdquo; (for when she looked down at her feet, they seemed to be almost out of sight, they were getting so far off). &ldquo;Oh, my poor little feet, I wonder who will put on your shoes and stockings for you now, dears? I&rsquo;m sure I shan&rsquo;t be able! I shall be a great deal too far off to trouble myself about you: you must manage the best way you can; &mdash; but I must be kind to them,&rdquo; thought Alice, &rsquo;or perhaps they won&rsquo;t walk the way I want to go! Let me see: I&rsquo;ll give them a new pair of boots every Christmas.&rdquo;&#8230;</p>
                    </div>
                    <div role="tabpanel" id="list-chap3" className="tab-pane fade">
                        <h3>A Caucus-Race and a Long Tale</h3>

                         <p>They were indeed a queer-looking party that assembled on the bank—the birds with draggled feathers, the animals with their fur clinging close to them, and all dripping wet, cross, and uncomfortable&#8230;</p>
                    </div>
                </div> 
            </div> 
          </div>   
        </div>
      </div>
    );
   
}

export default ListGroups;


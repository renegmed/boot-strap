import React from 'react'; 
 
function FlexibleBox(props) { 
    return (
      <div> 
        <div><b>Flexible Box</b></div>

        <aside className="container">
          <hr/>
          <div className="text-center"><b>Item #1</b></div>
          <section className="mySection d-flex">
            <div className="myBorder p-4">One</div>
            <div className="myBorder p-4">Two</div>
            <div className="myBorder p-4">Three</div>
          </section>
  
          <hr/>
          <div className="text-center"><b>Item #2</b></div>
          <section className="mySection d-flex flex-row">
            <div className="myBorder p-4">One</div>
            <div className="myBorder p-4">Two</div>
            <div className="myBorder p-4">Three</div>
          </section>

          <hr/>
          <div className="text-center"><b>Item #3</b></div>
          <section className="mySection d-flex flex-row-reverse">
            <div className="myBorder p-4">One</div>
            <div className="myBorder p-4">Two</div>
            <div className="myBorder p-4">Three</div>
          </section>

          <hr/>
          <div className="text-center"><b>Item #4</b></div>
          <section className="mySection d-flex flex-row justify-content-start">
            <div className="myBorder p-4">One</div>
            <div className="myBorder p-4">Two</div>
            <div className="myBorder p-4">Three</div>
          </section>

          <hr/>
          <div className="text-center"><b>Item #5</b></div>
          <section className="mySection d-flex flex-row justify-content-center">
            <div className="myBorder p-4">One</div>
            <div className="myBorder p-4">Two</div>
            <div className="myBorder p-4">Three</div>
          </section>

          <hr/>
          <div className="text-center"><b>Item #6</b></div>
          <section className="mySection d-flex flex-row justify-content-end">
            <div className="myBorder p-4">One</div>
            <div className="myBorder p-4">Two</div>
            <div className="myBorder p-4">Three</div>
          </section>

          <hr/>
          <div className="text-center"><b>Item #7</b></div>
          <section className="mySection d-flex flex-row justify-content-around">
            <div className="myBorder p-4">One</div>
            <div className="myBorder p-4">Two</div>
            <div className="myBorder p-4">Three</div>
          </section>

          <hr/>
          <div className="text-center"><b>Item #8</b></div>
          <section className="mySection d-flex flex-row justify-content-between">
            <div className="myBorder p-4">One</div>
            <div className="myBorder p-4">Two</div>
            <div className="myBorder p-4">Three</div>
          </section>

          <hr/>
          <div className="text-center"><b>Item #9</b></div>
          <section className="mySection d-flex flex-column">
            <div className="myBorder p-4">One</div>
            <div className="myBorder p-4">Two</div>
            <div className="myBorder p-4">Three</div>
          </section>

          <hr/>
          
          <div className="text-center"><b>Item #10</b></div>
          <section className="mySection d-flex flex-row align-items-start">
            <div className="myBorder p-4">One</div>
            <div className="myBorder p-4">Two</div>
            <div className="myBorder p-4">Three</div>
          </section>

          <hr/>
          <div className="text-center"><b>Item #11</b></div>
          <section className="mySection d-flex flex-row align-items-center">
            <div className="myBorder p-4">One</div>
            <div className="myBorder p-4">Two</div>
            <div className="myBorder p-4">Three</div>
          </section>

          <hr/>
          <div className="text-center"><b>Item #11.1</b></div>
          <section className="mySection d-flex flex-row align-items-center justify-content-center">
            <div className="myBorder p-4">One</div>
            <div className="myBorder p-4">Two</div>
            <div className="myBorder p-4">Three</div>
          </section>
          <hr/>
          <div className="text-center"><b>Item #12</b></div>
          <section className="mySection d-flex flex-row align-items-end">
            <div className="myBorder p-4">One</div>
            <div className="myBorder p-4">Two</div>
            <div className="myBorder p-4">Three</div>
          </section>

          <hr/>
          <div className="text-center"><b>Item #13</b></div>
          <section className="mySection d-flex flex-row align-items-baseline">
            <div className="myBorder p-4">One</div>
            <div className="myBorder p-4">Two</div>
            <div className="myBorder p-4">Three</div>
          </section>

          <hr/>
          <div className="text-center"><b>Item #14</b></div>
          <section className="mySection d-flex flex-row align-items-baseline">
            <div className="myBorder p-4">One</div>
            <div className="myBorder p-4 h2">Two</div>
            <div className="myBorder p-4 h4">Three</div>
          </section>

          <hr/>
          <div className="text-center"><b>Item #15</b></div>
          <section className="mySection d-flex flex-row align-items-stretch">
            <div className="myBorder p-4">One</div>
            <div className="myBorder p-4">Two</div>
            <div className="myBorder p-4">Three</div>
          </section>

          <hr/>
          <div className="text-center"><b>Item #16</b></div>
          <section className="mySection d-flex flex-row">
            <div className="myBorder p-4 align-self-start">One</div>
            <div className="myBorder p-4 align-self-center">Two</div>
            <div className="myBorder p-4 align-self-end">Three</div>
            <div className="myBorder p-4 align-self-baseline h3">Four</div>
            <div className="myBorder p-4 align-self-stretch">Five</div>
          </section>

          <hr/>
          <div className="text-center"><b>Item #17</b></div>
          <section className="mySection d-flex flex-row">
            <div className="myBorder p-4 align-self-md-start">One</div>
            <div className="myBorder p-4 align-self-md-center">Two</div>
            <div className="myBorder p-4 align-self-md-end">Three</div>
            <div className="myBorder p-4 align-self-md-baseline h3">Four</div>
            <div className="myBorder p-4 align-self-md-stretch">Five</div>
          </section>

          <hr/>
          <div className="text-center"><b>Item #17</b></div>
          <section className="mySection d-flex flex-row">
            <div className="myBorder m-0 align-self-md-start">One</div>
            <div className="myBorder m-0 align-self-md-center">Two</div>
            <div className="myBorder m-0 align-self-md-end">Three</div>
            <div className="myBorder m-0 align-self-md-baseline h3">Four</div>
            <div className="myBorder m-0 align-self-md-stretch">Five</div>
          </section>
        </aside>

      </div>
    );
   
}

export default FlexibleBox;
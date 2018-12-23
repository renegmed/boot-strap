import React from 'react'; 
 
function AlignmentOffsets(props) { 
    return (
      <div> 
            <div><b>Bootstrap Alignments and Offsets</b></div><br/>

            <hr/>
            <div className="myDiv4 container bg-warning">
                <section className="mySec row bg-warning align-items-end">
                    <div className="col bg-secondary">Column 1</div>
                    <div className="col bg-info">Column 2</div>
                    <div className="col bg-success">Column 3</div>
                </section>

            </div>

            <hr/>
            <div className="myDiv4 container bg-warning">
                <section className="mySec row bg-warning align-items-center">
                    <div className="col bg-secondary">Column 1</div>
                    <div className="col bg-info">Column 2</div>
                    <div className="col bg-success">Column 3</div>
                </section>

            </div>

            <hr/>
            <div className="myDiv4 container bg-warning">
                <section className="mySec row bg-warning align-items-start">
                    <div className="col bg-secondary">Column 1</div>
                    <div className="col bg-info">Column 2</div>
                    <div className="col bg-success">Column 3</div>
                </section>

            </div>

            <hr/>
            <div className="myDiv4 container bg-warning">
                <section className="mySec row bg-warning">
                    <div className="col bg-secondary align-self-start">Column 1</div>
                    <div className="col bg-info align-self-center">Column 2</div>
                    <div className="col bg-success align-self-end">Column 3</div>
                </section>
            </div>

            <hr/>
            <div className="myDiv4 container bg-warning">
                <section className="mySec row bg-warning justify-content-center">
                    <div className="col-4 bg-secondary">Column 1</div>
                    <div className="col-4 bg-info">Column 2</div>
                </section>
            </div>

            <hr/>
            <div className="myDiv4 container bg-warning">
                <section className="mySec row bg-warning justify-content-end">
                    <div className="col-4 bg-secondary">Column 1</div>
                    <div className="col-4 bg-info">Column 2</div>
                </section>
            </div>

            <hr/>
            <div className="myDiv4 container bg-warning">
                <section className="mySec row bg-warning justify-content-around">
                    <div className="col-4 bg-secondary">Column 1</div>
                    <div className="col-4 bg-info">Column 2</div>
                </section>
            </div>

            <hr/>
            <div className="myDiv4 container bg-warning">
                <section className="mySec row bg-warning justify-content-between">
                    <div className="col-4 bg-secondary">Column 1</div>
                    <div className="col-4 bg-info">Column 2</div>
                </section>
            </div>

            <hr/>
            <div className="myDiv4 container bg-warning">
                <section className="mySec row">
                    <div className="col-4 bg-secondary">Column 1</div>
                    <div className="col-4 bg-info offset-4">Column 2</div>
                </section>
            </div>

            <hr/>
            <div className="myDiv4 container bg-warning">
                <section className="mySec row">
                    <div className="col-3 bg-secondary">Column 1</div>
                    <div className="col-3 bg-info offset-md-3">Column 2</div>
                </section>
            </div>

            <hr/>
            <div className="myDiv4 container bg-warning">
                <section className="mySec row">
                    <div className="col-3 bg-secondary offset-md-2">Column 1</div>
                    <div className="col-3 bg-info offset-md-4">Column 2</div>
                </section>
            </div>


            <hr/>
            <div>both column pushed to the right</div>
            <div className="myDiv4 container bg-warning">
                <section className="mySec row">
                    <div className="col-3 bg-secondary ml-auto">Column 1</div>
                    <div className="col-3 bg-info">Column 2</div>
                </section>
            </div>

            <hr/>
            <div>one column pushed to the right, and the other to the left</div>
            <div className="myDiv4 container bg-warning">
                <section className="mySec row">
                    <div className="col-3 bg-secondary mr-auto">Column 1</div>
                    <div className="col-3 bg-info">Column 2</div>
                </section>
            </div>
      </div>
    );
   
}

export default AlignmentOffsets;
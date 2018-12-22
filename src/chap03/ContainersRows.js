import React from 'react'; 
 
function ContainersRows(props) { 
    return (
      <div> 
         <div>Bootstrap Containers and Rows</div>

         <div className="myDiv2 bg-primary"></div>
         <hr/>
         <div className="container">
            <div className="myDiv2 bg-primary"></div>
         </div>
         <hr/>

         <div className="container-fluid">
            <div className="myDiv2 bg-primary"></div>
         </div>
         <hr/>
         <div className="container">
            <div className="row">
                <div className="myRow col bg-success"></div>
                <div className="myRow col bg-warning"></div>
                <div className="myRow col bg-danger"></div> 
            </div>
            <div className="row">
                <div className="myRow col bg-primary"></div> 
                <div className="myRow col bg-info"></div> 
            </div>
         </div> 
      </div>
    );
   
}

export default ContainersRows;
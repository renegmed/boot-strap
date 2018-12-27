
/*

    https://github.com/react-bootstrap-table/react-bootstrap-table2

*/

import React from 'react'; 
import { Link } from 'react-router-dom';

function BoostrapTable2(props) { 
    return (
      <div className="container-fluid">
        <div><b>Bootstrap Table 2 (Boostrap Table Next) Examples</b></div>
        <section className="d-flex flex-column"> 
          <hr/>
          <Link to="/BorderlessTable"> Borderless Table </Link>          
          <hr/>
        </section>    
      </div>
    );
   
}

export default BoostrapTable2;
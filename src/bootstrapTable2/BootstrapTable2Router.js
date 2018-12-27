/*

    https://github.com/react-bootstrap-table/react-bootstrap-table2

*/

import React from 'react'; 
import { Route } from 'react-router-dom';

import BootstrapTable2 from './BootstrapTable2';
import   BorderlessTable   from './basic/BorderlessTable';
 
function BootstrapTable2Router(props) { 
    return (
      <div > 
        <Route exact path="/BootstrapTable2" render={ () => <BootstrapTable2/> } /> 
        <Route exact path="/BorderlessTable" render={ () => <BorderlessTable/> } /> 
         
      </div>
    ); 
}

export default BootstrapTable2Router;

import React, { Component } from 'react'; 
import { Route } from 'react-router-dom';
import TableOfContent from './TableOfContent';
import Chapter3Router from './chap03/Chapter3Router';
import Chapter4Router from './chap04/Chapter4Router';
import Chapter5Router from './chap05/Chapter5Router';
 
class App extends Component {
  render() {
    return (
      <div >
        <Route exact path="/" render={ () => <TableOfContent/> } /> 
        <Chapter3Router />
        <Chapter4Router />
        <Chapter5Router />
      </div>
    );
  }
}

export default App;

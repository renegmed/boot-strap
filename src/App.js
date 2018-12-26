import React, { Component } from 'react'; 
import { Route } from 'react-router-dom';
import TableOfContent from './TableOfContent';
import Chapter3Router from './chap03/Chapter3Router';
import Chapter4Router from './chap04/Chapter4Router';
import Chapter5Router from './chap05/Chapter5Router';
import Chapter6Router from './chap06/Chapter6Router';
import Chapter7Router from './chap07/Chapter7Router';
import Chapter8Router from './chap08/Chapter8Router';
import Chapter9Router from './chap09/Chapter9Router';
class App extends Component {
  render() {
    return (
      <div >
        <Route exact path="/" render={ () => <TableOfContent/> } /> 
        <Chapter3Router />
        <Chapter4Router />
        <Chapter5Router />
        <Chapter6Router />
        <Chapter7Router />
        <Chapter8Router />
        <Chapter9Router />
      </div>
    );
  }
}

export default App;

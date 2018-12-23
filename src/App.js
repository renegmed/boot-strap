import React, { Component } from 'react'; 
import { Route } from 'react-router-dom';
import TableOfContent from './TableOfContent';
import Chapter3Router from './chap03/Chapter3Router';
import Chapter4Router from './chap04/Chapter4Router';

// import Chapter5 from './chap05/Chapter5';

// import Chapter6 from './chap06/Chapter6';

// import Chapter7 from './chap07/Chapter7';

// import Chapter8 from './chap08/Chapter8';

class App extends Component {
  render() {
    return (
      <div >
        <Route exact path="/" render={ () => <TableOfContent/> } /> 
        <Chapter3Router />
        <Chapter4Router />
      </div>
    );
  }
}

export default App;

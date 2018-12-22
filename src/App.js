import React, { Component } from 'react'; 
import { Route } from 'react-router-dom';
import TableOfContent from './TableOfContent';
import Chapter3 from './chap03/Chapter3';
import BackgroundColors from './chap03/BackgroundColors';
import ContainersRows from './chap03/ContainersRows';
import MediaBreakpoints from './chap03/MediaBreakpoints';
import GridSystems from './chap03/GridSystems';
import AlignmentOffsets from './chap03/AlignmentOffsets';
import Padding from './chap03/Padding';
import FlexibleBox from './chap03/FlexibleBox';

// import Chapter4 from './chap04/Chapter4';

// import Chapter5 from './chap05/Chapter5';

// import Chapter6 from './chap06/Chapter6';

// import Chapter7 from './chap07/Chapter7';

// import Chapter8 from './chap08/Chapter8';

class App extends Component {
  render() {
    return (
      <div >
        <Route exact path="/" render={ () => <TableOfContent/> } /> 
        <Route exact path="/Chapter3" render={ () => <Chapter3/> } /> 
        <Route exact path="/BackgroundColors" render={ () => <BackgroundColors/> } /> 
        <Route exact path="/ContainersRows" render={ () => <ContainersRows/> } /> 
        <Route exact path="/MediaBreakpoints" render={ () => <MediaBreakpoints/> } /> 
        <Route exact path="/GridSystems" render={ () => <GridSystems/> } /> 
        <Route exact path="/AlignmentOffsets" render={ () => <AlignmentOffsets/> } /> 
        <Route exact path="/Padding" render={ () => <Padding/> } /> 
        <Route exact path="/FlexibleBox" render={ () => <FlexibleBox/> } /> 
      </div>
    );
  }
}

export default App;


/*
  
https://bitsrc.io/reactstrap/reactstrap/reactstrap/button-group

*/
import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export default class ButtonGroupExample extends React.Component {
 render() {
   return (
     <ButtonGroup>
       <Button>Left</Button>{' '}
       <Button>Middle</Button>{' '}
       <Button>Right</Button>
     </ButtonGroup>
   );
 }
}
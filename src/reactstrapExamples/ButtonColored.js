import React from 'react';
import { Button } from 'reactstrap'; 

export default class ButtonColored extends React.Component {
  primaryButton(e) {
    console.log("Primary button clicked.")
  }

  secondaryButton(e) {
    console.log("Secondary button clicked.")
  }

  render() {
      return (
      <div>
        <Button color="primary" onClick={this.primaryButton}>primary</Button>{' '}
        <Button color="secondary" onClick={this.secondaryButton}>secondary</Button>{' '}
        <Button color="success">success</Button>{' '}
        <Button color="info">info</Button>{' '}
        <Button color="warning">warning</Button>{' '}
        <Button color="danger">danger</Button>{' '}
        <Button color="link">link</Button>
      </div>
    );
  }
}
import React from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import ButtonDropdownExample from './ButtonDropdownExample';

const InputGroupAddonExample = (props) => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon><Button>I'm a button</Button></InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupAddon><ButtonDropdownExample /></InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon><ButtonDropdownExample /></InputGroupAddon>
        <Input placeholder="and..." />
        <InputGroupAddon><Button color="secondary">I'm a button</Button></InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default InputGroupAddonExample;
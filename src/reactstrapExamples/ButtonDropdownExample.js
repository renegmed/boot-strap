/*

    https://bitsrc.io/reactstrap/reactstrap/reactstrap/button-dropdown

*/

import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class ButtonDropdownExample extends React.Component {
 constructor(props) {
   super(props);
 
   this.toggle = this.toggle.bind(this);
   this.state = {
    dropdownOpen: false
   };
  }

 toggle() {
  this.setState({
    dropdownOpen: !this.state.dropdownOpen
    });
 }

 render() {
   return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Button Dropdown
       </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
         <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
 }
}
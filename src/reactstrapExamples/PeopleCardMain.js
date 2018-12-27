
// https://www.youtube.com/watch?v=8dp7lW3DZEg , https://github.com/johnazre/reactstrap-intro-youtube

import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PeopleCard from './PeopleCard';

class PeopleCardMain extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          name: "David Davidson",
          company: "Some Company, Inc",
          description: "Met at a party. Will connect with later"
        },
        {
          id: 2,
          name: "Mark Markson",
          company: "Some Company, Inc",
          description: "Met at a party. Will connect with later"
        },
        {
          id: 3,
          name: "Judy Judyson",
          company: "Some Company, Inc",
          description: "Met at a party. Will connect with later"
        },
        {
          id: 4,
          name: "James Jameson",
          company: "Some Company, Inc",
          description: "Met at a party. Will connect with later"
        }
      ]
    }
  }

  removePerson(id) {
    this.setState({ people: this.state.people.filter(person => person.id !== id)});
  }

  render () {
    let peopleCards = this.state.people.map( (person, index) => {
      return (
        <Col sm="4">
          <PeopleCard key={index} removePerson={this.removePerson.bind(this)} person={person} />
        </Col>
      )
    })
    return (
      <Container fluid>
        <Row>
          {peopleCards}
        </Row>
      </Container>
    )
  }
}

export default PeopleCardMain;

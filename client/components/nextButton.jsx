import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'

class NextButton extends Component {
  render() {
    let nextUrl = this.props.nextUrl;
    return (
      <Nav bsStyle="pills" activeKey={1}>
        <NavItem eventKey={1} href={nextUrl}>Next</NavItem>
      </Nav>
    )
  }
}

export default NextButton


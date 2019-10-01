import React, { Component } from "react";
import {
  Navbar,
  Form,
  Button,
  Nav,
  FormControl,
  NavDropdown
} from "react-bootstrap";
export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar
          style={{ paddingLeft: 150, paddingRight: 150 }}
          fixed
          collapseOnSelect
          expand="lg"
          bg="primary"
          variant="dark"
          justify-content-between
        >
          <Navbar.Brand href="#home">seers</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button onClick={this.props.onLogout} type="submit">
            Logout
          </Button>
        </Navbar>
      </div>
    );
  }
}

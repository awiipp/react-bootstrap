// rafce

import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar
      className="bg-warning position-fixed top-0 start-0 end-0"
      expand="lg"
    >
      {/* NOTE: add position-fixed, top-0, start-0, end-0 */}
      <Container>
        <Navbar.Brand>NavbarBrand</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Nav Item</Nav.Link>

            <NavDropdown title="NavDropdown">
              <NavDropdown.Item>NavDropdown.Item 1</NavDropdown.Item>
              <NavDropdown.Item>NavDropdown.Item 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                NavDropdown.Item 3 after NavDropdown.Divider
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

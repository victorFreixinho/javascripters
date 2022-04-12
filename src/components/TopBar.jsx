import React from "react";
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';
import logo from "../images/logotipo.png";

function TopBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center justify-content-center">
          <img
            src={logo}
            alt="Logo"
            height="50"
            className="d-inline-block align-top"/>
          <h1 style={{fontSize: "25px"}}>&nbsp; IDQBRN &nbsp; &nbsp; </h1>
          <div style={{borderLeft: "1px solid black", height: "50px"}}></div>
          <h2 style={{fontSize: "23px"}}>&nbsp; &nbsp; Mapa Epidemiológico</h2>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default TopBar;

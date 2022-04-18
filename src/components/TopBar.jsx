import React from "react";
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';
import Logotipo from "../images/logotipo.svg";

function TopBar() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm p-1">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center justify-content-center">
          <img src={Logotipo} alt="Logotipo IDQBRN" style={{height: "50px"}} />
          <h1 style={{fontSize: "25px", paddingTop: "5px"}}>&nbsp; &nbsp; IDQBRN &nbsp; &nbsp; </h1>
          <div style={{borderLeft: "1px solid black", height: "30px"}}></div>
          <h2 style={{fontSize: "23px", paddingTop: "5px"}}>&nbsp; &nbsp; Mapa Epidemiológico</h2>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default TopBar;

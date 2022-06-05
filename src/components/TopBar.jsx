import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../images/logotipo.png";
import styles from "./styles/TopBar.module.css";

function TopBar() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm p-1">
      <Container>
        <Navbar.Brand
          href="/"
          className="d-flex align-items-center justify-content-center"
        >
          <img
            src={logo}
            alt="Logo"
            height="40"
            className="d-inline-block align-top"
          />

          <h1 className={styles.h1_title}>
            &nbsp; &nbsp; IDQBRN &nbsp; &nbsp;{" "}
          </h1>

          <div className={styles.vertical_bar}></div>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" className="px-1">
            <h3 className={styles.h3_options}>
              &nbsp; &nbsp;Mapa Epidemiológico
            </h3>
          </Nav.Link>
          <Nav.Link href="/users" className="px-1">
            <h3 className={styles.h3_options}>&nbsp; &nbsp;Usuários</h3>
          </Nav.Link>
          <Nav.Link href="/desearses" className="px-1">
            <h3 className={styles.h3_options}>&nbsp; &nbsp;Doenças</h3>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopBar;

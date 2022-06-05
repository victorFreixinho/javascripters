import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../images/logotipo.png";
import styles from './styles/TopBar.module.css';

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
          height="50"
          className="d-inline-block align-top"
        />

        <h1 className={styles.h1_title}>
          &nbsp; &nbsp; IDQBRN &nbsp; &nbsp;{" "}
        </h1>

        <div className={styles.vertical_bar}></div>

        <h2 className={styles.h2_subtitle}>
          &nbsp; &nbsp; Mapa Epidemiológico
        </h2>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default TopBar;

import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../images/logotipo.png";
import styles from "./styles/TopBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../states/modules/session";
import { useHistory } from "react-router-dom";
import { selectSigned } from "../states/modules/session/session.utils";

function TopBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const signed = useSelector(selectSigned);
  const handleLogoutClick = () => {
    dispatch(logoutAction());
    history.push("/");
  };

  return (
    <Navbar bg="light" expand="md" className="shadow-md p-1">
      <Container>
        <Navbar.Brand
          href="/"
          className="d-flex justify-content-start align-items-center "
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
          {signed ? (
            <>
              <Nav.Link href="/users" className="px-1">
                <h3 className={styles.h3_options}>&nbsp; &nbsp;Usuários</h3>
              </Nav.Link>
              <Nav.Link href="/diseases" className="px-1">
                <h3 className={styles.h3_options}>&nbsp; &nbsp;Doenças</h3>
              </Nav.Link>
              <Nav.Link href="/upload-data" className="px-1">
                <h3 className={styles.h3_options}>&nbsp; &nbsp;Upload CSV</h3>
              </Nav.Link>
              <Nav.Link className="px-1" onClick={handleLogoutClick}>
                <h3 className={styles.h3_options}>&nbsp; &nbsp;Logout</h3>
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/login" className="px-1">
                <h3 className={styles.h3_options}>&nbsp; &nbsp;Login</h3>
              </Nav.Link>
              <Nav.Link href="/signup" className="px-1">
                <h3 className={styles.h3_options}>&nbsp; &nbsp;Cadastro</h3>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopBar;

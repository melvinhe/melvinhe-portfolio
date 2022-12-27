import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./Navbar.module.css";

export default function NavBar() {
  return (
    <div className={styles.nav}>
      <Navbar collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand>
            <Link className={styles.home} to="/">
              Homepage
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className={styles.link} to="/about">About</Link>
              <Link className={styles.link} to="/projects">Projects</Link>
              <Link  className={styles.link} to="/experience">Experience</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

import React from "react";
import styles from "./Home.module.css";
import logo from "../images/logo.png";
import about from "../images/about.png";
import projects from "../images/projects.png";
import experience from "../images/experience.png";
import salutations from "../features/salutations";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";


export default function Home() {
  return (
    <div>
      <Row className="g-0">
        <Col lg={2}>
        </Col>
        <Col lg={9}>
          <h1 className={styles.heading}>
          {salutations()}! Welcome to Melvin He's website. 
          </h1>
          <p className={styles.subheading}>
            I'm a sophomore studying Applied Mathematics-Computer Science at Brown 
            University passionate about exploring cutting-edge technology and improving education.
          </p>
        </Col>
        <Col lg={2}>
        </Col>
      </Row>
      <img className={styles.logo} src={logo} />
      <Row className={styles.links}>
        <Col lg={4}>
          <Link className={styles.link} to="/about">
            {" "}
            <img className={styles.drawings} src={about} />
          </Link>
          <p>
            <Link className={styles.link} to="/about">
              About
            </Link>
          </p>
        </Col>
        <Col lg={4}>
          <Link className={styles.link} to="/projects">
            {" "}
            <img className={styles.drawings} src={projects} />
          </Link>
          <Link className={styles.link} to="/projects">
            Projects
          </Link>
        </Col>
        <Col lg={4}>
          <Link className={styles.link} to="/experience">
            <img className={styles.drawings} src={experience} />
          </Link>
          <Link className={styles.link} to="/experience">
            Experience
          </Link>
        </Col>
      </Row>
      {/* footer */}
      <Footer />
    </div>
  );
}

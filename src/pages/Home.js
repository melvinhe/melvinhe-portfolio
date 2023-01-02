import React from "react";
import styles from "./Home.module.css";
import welcome from "../images/welcome.png";
import about from "../images/about.png";
import projects from "../images/projects.png";
import experience from "../images/experience.png";
import salutations from "../features/salutations";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";


export default function Home() {
  return (
    <div>
      <Header />
      <Row className="g-0">
        <Col lg={2}>
        </Col>
        <Col lg={9}>
          <h1 className={styles.heading}>
          {salutations()}! My name is Melvin He.
          </h1>
          <p className={styles.subheading}>
            I'm a sophomore studying Applied Mathematics-Computer Science at Brown 
            University passionate about exploring cutting-edge technology and improving education.
          </p>
        </Col>
        <Col lg={2}>
        </Col>
      </Row>
      <img className={styles.welcome} src={welcome} />
      <Row className={styles.links}>
        <Col lg={4} md={4} sm={4} xs={12}>
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
        <Col lg={4} md={4} sm={4} xs={12}>
          <Link className={styles.link} to="/projects">
            {" "}
            <img className={styles.drawings} src={projects} />
          </Link>
          <Link className={styles.link} to="/projects">
            Projects
          </Link>
        </Col>
        <Col lg={4} md={4} sm={4} xs={12}>
          <Link className={styles.link} to="/experience">
            <img className={styles.drawings} src={experience} />
          </Link>
          <Link className={styles.link} to="/experience">
            Experience
          </Link>
        </Col>
      </Row>
    </div>
  );
}

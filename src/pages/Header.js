import React from "react";
import styles from "./Header.module.css";
import socials from "../data/socials.json";
import { Row, Col } from "react-bootstrap";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div className={styles.smallContainer}>
      <Row>
        <Col lg={2} md={2} sm={2} xs={2}>
          <div className={styles.circle}> 
            <a href={socials.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} color="black" />
            </a>
          </div>
        </Col>
        <Col lg={2} md={2} sm={2} xs={2}>
          <div className={styles.circle}> 
            <a href={socials.github}>
              <FontAwesomeIcon icon={faGithub} color="black"/>
            </a>
          </div>
        </Col>
        <Col lg={2} md={2} sm={2} xs={2}>
          <div className={styles.circle}> 
            <a href={"mailto:"+socials.gmail}>
              <FontAwesomeIcon icon={faEnvelope} color="black"/>
            </a>
          </div>
        </Col>
        <Col lg={2} md={2} sm={2} xs={2}>
          <div className={styles.circle}> 
            <a href={"mailto:"+socials.gmail}>
              <FontAwesomeIcon icon={faFile} color="black"/>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

import React from "react";
import styles from "./Footer.module.css";
import socials from "../data/socials.json";
import { Row, Col } from "react-bootstrap";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="footer">
      <hr />
      <Row className={styles.socialsContainer}>
        <Col lg={4} md={4} sm={4}>
          <a href={socials.linkedin}>
            <div className={styles.circle}> 
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </a>
        </Col>
        <Col lg={4} md={4} sm={4}>
          <a href={socials.github}>
            <div className={styles.circle}> 
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </a>
        </Col>
        <Col lg={4} md={4} sm={4}>
          <a href={"mailto:"+socials.gmail}>
            <div className={styles.circle}> 
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </a>
        </Col>
      </Row>
    </div>
  );
}

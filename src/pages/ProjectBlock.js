import React from "react";
import styles from "./ProjectBlock.module.css";
import ProjectInfoDialog from "./ProjectInfoDialog";
import {useState} from "react";
import {Col, Row} from "react-bootstrap";

export default function ProjectBlock({projects}) {
  const [currentProject, setCurrentProject] = useState();

  return (
    <>
      <ProjectInfoDialog
        isOpen={currentProject !== undefined}
        onClose={() => setCurrentProject(undefined)}
        project={currentProject}
      />

      <Row>
        {projects.map((project, index) => (
          <Col lg={12} md={12} sm={12} xs={12} key={index}>
            <button
              onClick={() => setCurrentProject(project)}
              className={styles.projectBlock}
            A>
              <div className={styles.projectBlockImage}>
                <img
                  className={styles.projectBlockImage}
                  src={project.image}
                  alt=""
                />
              </div>
              <div className={styles.projectBlockContent}>
                <h3 className={styles.projectBlockTitle}>
                  {project.title}
                </h3>
                <p className={styles.projectBlockDescription}>
                  {project.description}
                </p>
              </div>
            </button>
          </Col>
        ))}
      </Row>
    </>
  );
}

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cloud from "../../Assets/Projects/cloud.png";
import news from "../../Assets/Projects/news.png";
import chat from "../../Assets/Projects/chat.png";
import task from "../../Assets/Projects/task.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloud}
              isBlog={false}
              title="Chatt Applicaiton"
              description="Lorem"
              ghLink="https://kishorreddys.github.io/portfolio/"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Cab Management System"
              description="Lorem"
              ghLink="https://kishorreddys.github.io/portfolio/"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="E-Commerce Website"
              description="Lorem"
              ghLink="https://kishorreddys.github.io/portfolio/"
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Task Manager API"
              description="A RESTful API using Hibernate, JABC, and Spring. The API will enable users to perform CRUD operations (Create, Read, Update, and Delete) on tasks."
              ghLink="https://kishorreddys.github.io/portfolio/"
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

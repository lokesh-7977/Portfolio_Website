import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Chit - Chat - Champs"
              description="Chit Chat Champs is a real-time chat application developed with the MERN stack and powered by Socket.io. Enjoy instant messaging, private conversations, and group chats. With features like user authentication, notifications, and customizable profiles, it offers a dynamic and secure platform for seamless communication."
              ghLink="https://github.com/lokesh-7977/Chit-Chat-Champs"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Swip Tory"
              description="Swiptory, an immersive web story platform, caters to readers and writers with captivating narratives. Express appreciation through likes, bookmark favorites, and explore diverse categories. With user authentication and personalized feeds, it provides an engaging space for dynamic storytelling."
              ghLink="https://github.com/lokesh-7977/Swip-Tory"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Pocket Notes App"
              description="Pocket Notes,a React-powered app utilizing the Context API, provides a seamless note-taking experience. With an intuitive interface and efficient state management, organize and retrieve your thoughts effortlessly. Secure authentication and collaborative features enhance productivity for users across various devices."
              ghLink="https://github.com/lokesh-7977/Pocket-Notes-App"
              demoLink="notes-pocket.netlify.app"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Super App"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="www.google.com"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Todo List"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="www.google.com"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Rock Paper Scissors"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="#"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />{" "}
            
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

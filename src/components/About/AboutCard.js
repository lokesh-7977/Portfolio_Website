import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lokesh Medharametla </span>
            from <span className="purple"> Hyderabad,Telangana, India.</span>
            <br /> I'm a Final Year Student Pursuing Bachelor's Of Technology
            in Computer Science & Engineering.
            <br />
            Additionally, I'm Currently Employed As A Software Developer Intern At
            Health United Private Limited.
            <br />
            <br />
            Apart Of Coding, Some Other Activities That I Love & Like To Do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Work towards creating meaningful contributions!"{" "}
          </p>
          <footer className="blockquote-footer">Lokesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

// AboutSection.js
import React from "react";
import { Container } from "react-bootstrap";

export default function AboutSection() {
  return (
    <>
      <Container fluid>
        <div className="about-container">
          <div className="about__head">About</div>
          <div className="about__body">
            <div className="about__title">
              We love to make great things, things that matter.
            </div>
            <div className="about__content">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

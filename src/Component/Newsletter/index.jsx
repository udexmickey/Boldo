import React from "react";
import { Button } from "react-bootstrap";
import "../../style/newsletter.scss";
export default function Newsletter() {
  return (
    <div className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-body">
          <div className="newsletter-title">
            An enterprise template to ramp up your company website
          </div>
          <form action="" className="newsletter-form">
            <div className="group-form">
              <input
                type="text"
                placeholder="Your email address"
                name=""
                id=""
                className=""
              />
              <Button variant="success" type="submit">
                Start now
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

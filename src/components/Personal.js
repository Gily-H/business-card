import React from "react";
import "../styles/personal.css";

export default function Personal() {
  return (
    <>
      <h2 className="name-header">Gilman Huang</h2>
      <h4 className="title-header">Full-Stack Developer</h4>
      <div className="email-button">
        <i className="fas fa-envelope"></i>
        <a className="mailto-link" href="mailto:gilman.huang213@gmail.com">
          Email
        </a>
      </div>
    </>
  );
}

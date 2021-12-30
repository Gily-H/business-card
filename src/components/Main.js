import React from "react";
import Personal from "./Personal";
import "../styles/main.css";

export default function Main() {
  return (
    <div className="main-container">
      <Personal />
      <h3 className="section-heading">About</h3>
      <p className="section-text">
        I am a college student currently studying Computer Science. I love coding and solving
        problems. Programming allows me to be creative and feel smart.
      </p>
      <h3 className="section-heading">Interests</h3>
      <p className="section-text">
        My interests are programming (of course), film photography, video games, and volleyball.
      </p>
    </div>
  );
}

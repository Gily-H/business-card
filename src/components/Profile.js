import React from "react";
import profilePic from "../images/profile.jpg";
import "../styles/profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <img src={profilePic} className="profile-pic" />
    </div>
  );
}

import React from "react";
import Profile from "./components/Profile";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./styles/app.css";

export default function App() {
  return (
    <div className="business-card">
      <Profile />
      <Main />
      <Footer />
    </div>
  );
}

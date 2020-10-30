import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <span>
        <Link to="/">Home</Link>
      </span>
      <span>
        <Link to="/about">About</Link>
      </span>
    </div>
  );
}

export default Navigation;

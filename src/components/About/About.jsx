import React, { Component } from "react";
import { Link } from "gatsby";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>Coming soon...</h1>
        <h4 style={{ padding: "8px" }}>
          <Link to="/">
            <span role="img" aria-label="Home">
              🏠
            </span>
            Home
          </Link>
        </h4>
      </div>
    );
  }
}

export default About;

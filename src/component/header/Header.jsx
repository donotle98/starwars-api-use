import React, { Component } from "react";
import "../assets/Header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="scroll-up">
        <div className="neon">
          <span className="text" data-text="Star Wars">
            Star Wars
          </span>
          <span className="gradient"></span>
          <span className="spotlight"></span>
        </div>
        <div className="some-space"></div>
      </div>
    );
  }
}

export default Header;

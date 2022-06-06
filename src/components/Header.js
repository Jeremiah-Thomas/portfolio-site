import React, { Component } from "react";
import "./../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
export class Header extends Component {
  render() {
    return (
      <header>
        <section className="name">
          <FontAwesomeIcon icon={faCode} />
          <h1>Jeremiah Thomas</h1>
        </section>
        <section className="header-info">
          <div className="info-content">
            <h2>Full Stack Development</h2>
            <h2 className="age">20</h2>
            <h2>BloomTech Institute of Technology</h2>
          </div>
          <div className="info-labels">
            <p className="field-lbl">Field</p>
            <p className="age-lbl">Age</p>
            <p className="education-lbl">Education</p>
          </div>
        </section>
      </header>
    );
  }
}

export default Header;

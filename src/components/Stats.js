import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./../styles/stats.css";

export class Stats extends Component {
  render() {
    return (
      <section className="stats">
        <section className="stat-section">
          <h1>React</h1>
          <FontAwesomeIcon className="svg-icon" icon={faCode} />
          <div className="stat-num">6 Months</div>
        </section>
        <section className="stat-section">
          <h1>Express</h1>
          <FontAwesomeIcon className="svg-icon" icon={faServer} />
          <div className="stat-num">4 Months</div>
        </section>
        <section className="stat-section">
          <h1>Temp</h1>
          <div className="stat-num"></div>
        </section>
        <section className="stat-section">
          <h1>Temp</h1>
          <div className="stat-num"></div>
        </section>
        <section className="stat-section">
          <h1>Temp</h1>
          <div className="stat-num"></div>
        </section>
        <section className="stat-section">
          <h1>Temp</h1>
          <div className="stat-num"></div>
        </section>
      </section>
    );
  }
}

export default Stats;

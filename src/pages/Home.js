import React, { Component } from "react";
import Header from "../components/Header";
import Stats from "../components/Stats";

export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Stats />
      </div>
    );
  }
}

export default Home;

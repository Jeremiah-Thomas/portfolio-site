import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Project from "./Project";
import axios from "axios";

const List = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-block: 5rem;
`;

const Projects = (props) => {
  const [projects, setProjects] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/api/projects` || "/api/projects")
      .then((res) => {
        setProjects(res.data);
      });
  }, []);

  return (
    <>
      <h1>Projects</h1>
      <List>
        {projects == null ? (
          <p>Loading ...</p>
        ) : projects.length < 1 ? (
          <p>No Projects</p>
        ) : (
          projects.map((project) => {
            return <Project project={project} key={project.id} />;
          })
        )}
      </List>
    </>
  );
};

export default Projects;

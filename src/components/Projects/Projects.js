import React from "react";
import styled from "styled-components";
import Project from "./Project";

const List = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-block: 5rem;
`;

const Projects = (props) => {
  const { projects } = props;
  return (
    <>
      <h1>Projects</h1>
      <List>
        {projects.map((project) => {
          return <Project project={project} />;
        })}
      </List>
    </>
  );
};

export default Projects;

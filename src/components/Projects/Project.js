import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 1rem;
  box-shadow: -2px -1px 13px 4px rgba(0, 0, 0, 0.53);
  padding: 1rem;
  width: 80%;

  img {
    max-width: 80%;
  }
`;

const Project = (props) => {
  const { project } = props;
  return (
    <Card>
      <h1>{project.project_name}</h1>
      <img src={project.project_screenshot} alt={project.project_name} />
      <h2>Technologies Used</h2>
      <p>{project.technologies_used}</p>
    </Card>
  );
};

export default Project;

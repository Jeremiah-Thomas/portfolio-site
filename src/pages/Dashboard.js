import React, { useState } from "react";
import styled from "styled-components";
import ProjectForm from "../components/Dashboard/ProjectForm";
import Message from "../components/Dashboard/Message";

const Main = styled.div`
  background-color: var(--gray-theme);
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Dashboard = () => {
  const [message, setMessage] = useState("");
  return (
    <Main>
      <Message message={message} />
      <ProjectForm setMessage={setMessage} />
    </Main>
  );
};

export default Dashboard;

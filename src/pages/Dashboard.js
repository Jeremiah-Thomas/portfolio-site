import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ProjectForm from "../components/Dashboard/ProjectForm";
import Message from "../components/Dashboard/Message";
import axios from "axios";

const Main = styled.div`
  background-color: var(--gray-theme);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .post(
        `${process.env.REACT_APP_BACKEND}/api/auth/authenticate`,
        {},
        { headers: token ? { Authorization: token } : {} }
      )
      .catch((err) => {
        console.log(err);
        if (err.response.status === 403) {
          navigate("/login", {
            replace: true,
            state: { register: err.response.data.register },
          });
        }
      });
  }, [navigate]);

  const [message, setMessage] = useState("");
  return (
    <Main>
      <Message message={message} display={message ? "flex" : "none"} />
      <ProjectForm setMessage={setMessage} />
    </Main>
  );
};

export default Dashboard;

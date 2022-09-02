import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: var(--light-theme);
  width: 100%;
  height: 76vh;

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    width: 75%;
  }

  input {
    background-color: var(--light-theme);
    color: var(--gray-theme);
    border-radius: 1rem;
    padding: 0.5rem;
    width: 50%;
  }

  input[type="submit"] {
    margin-top: 3rem;
    cursor: pointer;
  }
`;

const AdminLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [register, setRegister] = useState(location.state.register);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    if (register) {
      axios
        .post(`${process.env.REACT_APP_BACKEND}/api/auth/register`, {
          password,
        })
        .then((res) => {
          setMessage(res.data.message);
          setRegister(false);
          setPassword("");
        })
        .catch((err) => {
          setMessage(err.response.data.message);
        });
    } else {
      axios
        .post(`${process.env.REACT_APP_BACKEND}/api/auth/login`, { password })
        .then((res) => {
          setMessage(res.data.message);
          localStorage.setItem("token", res.data.token);
          navigate("/dashboard", { replace: true });
        })
        .catch((err) => {
          setMessage(err.response.data.message);
        });
    }
  };

  const onChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        {register ? (
          <label>
            Create Password
            <input
              type="password"
              autoComplete="new-password"
              onChange={onChange}
              value={password}
            />
          </label>
        ) : (
          <label>
            Password
            <input
              type="password"
              autoComplete="current-password"
              onChange={onChange}
              value={password}
            />
          </label>
        )}
        <input type="submit" value={register ? "Register" : "Login"} />
      </Form>
      <p>{message}</p>
    </div>
  );
};

export default AdminLogin;

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Head = styled.header`
  background-color: rgba(0, 0, 0, 0);
  color: var(--light-theme);
  font-size: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5vh;
  p {
    font-family: "Tangerine";
    color: var(--red-theme);
    margin: 0;
    padding: 1rem;
  }

  @media (max-width: 830px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    all: unset;
    border-radius: 1rem;
    background-color: var(--light-theme);
    color: var(--red-theme);
    width: 10rem;
    padding: 1rem;
    height: 1rem;
    font-size: 1rem;
    margin-right: 2rem;
    cursor: pointer;

    &:hover {
      background-color: var(--red-theme);
      color: var(--light-theme);
    }

    @media (max-width: 830px) {
      margin: 0;
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <Head>
      <p>Jeremiah Thomas</p>
      <button
        onClick={() => {
          navigate("/work-order", { replace: false });
        }}
      >
        Need A Website?
      </button>
    </Head>
  );
};

export default Header;

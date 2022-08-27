import React from "react";
import styled from "styled-components";

const Head = styled.header`
  background-color: rgba(0, 0, 0, 0);
  color: var(--light-theme);
  font-size: 3rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5vh;
  p {
    font-family: "Tangerine";
    color: var(--red-theme);
    margin: 0;
    padding: 1rem;
  }
`;

const Header = () => {
  return (
    <Head>
      <p>Jeremiah Thomas</p>
    </Head>
  );
};

export default Header;

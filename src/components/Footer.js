import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  height: 10vh;
  max-width: 100%;
  background-color: var(--light-theme);
  position: realitve;
  bottom: 0;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1rem;
  gap: 1rem;
  color: var(--gray-theme);

  h3 {
    padding: 0;
    margin: 0;
    color: var(--red-theme);
  }

  p {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: var(--gray-theme);
  }
`;

const Footer = () => {
  return (
    <Foot>
      <h3>Contact</h3>
      <a href="mailto:jeremiah@jeremiah-thomas.com">
        jeremiah@jeremiah-thomas.com
      </a>
    </Foot>
  );
};

export default Footer;

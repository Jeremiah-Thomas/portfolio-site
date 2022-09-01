import React from "react";
import styled from "styled-components";
import Projects from "./Projects/Projects";
import Hero from "../assets/hero.jpg";

const Main = styled.main`
  color: var(--light-theme);

  h1 {
    color: var(--red-theme);
    font-size: 3rem;
  }

  h2 {
    color: var(--red-theme);
  }

  p {
    font-size: 1.5rem;
    margin: 0;
  }
`;

const Tech = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-inline: 10%;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 2rem;
    margin: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

const Intro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 7rem;
  gap: 2rem;

  img {
    max-width: 40%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 55%;
  }

  @media (max-width: 830px) {
    flex-direction: column;

    img {
      max-width: 75%;
    }

    div {
      max-width: 80%;
    }
  }
`;

const MainSection = () => {
  return (
    <Main>
      <Intro>
        <img src={Hero} alt="FullStack Portrayal" />
        <div>
          <h1>Hello There</h1>
          <p>
            I'm Jeremiah Thomas, a full stack web developer. I am currently
            searching for a full time job and do freelance work on the side.
          </p>
        </div>
      </Intro>
      <Projects />
      <Tech>
        <div>
          <h1>Technologies That I Know</h1>
          <p>ReactJs</p>
          <p>ExpressJs</p>
          <p>KnexJs</p>
          <p>SQLite3</p>
        </div>
        <div>
          <h1>Technologies That I'm Learning</h1>
          <p>NextJs</p>
          <p>PostgreSQL</p>
          <p>MongoDB</p>
        </div>
      </Tech>
    </Main>
  );
};

export default MainSection;

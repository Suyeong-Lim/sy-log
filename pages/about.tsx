import AboutMe from "components/AboutMe";
import type { NextPage } from "next";
import Container from "../components/Container";

const About = () => {
  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        <AboutMe />
      </div>
    </Container>
  );
};

export default About;

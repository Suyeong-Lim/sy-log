import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";

const Home: NextPage = () => {
  return (
    <Container>
      <span className={`text-green-500`}>Home</span>
    </Container>
  );
};

export default Home;

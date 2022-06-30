import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { InferGetStaticPropsType } from "next";
import Container from "../components/Container";
import RecentPosts from "../components/RecentPosts";
import metadata from "../data/metadata";
import { allPosts } from "contentlayer/generated";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <div className={`my-5 w-full`}>
        <div className={`relative`}>
          <Image
            src={`/static/home.png`}
            alt="대표 이미지"
            width={`100%`}
            height={45}
            layout={`responsive`}
            objectFit="cover"
            className={`rounded-3xl`}
          />
          <span
            className={` absolute top-12 font-extrabold italic text-white text-6xl md:text-6xl text flex justify-center w-full drop-shadow-lg`}
          >
            towards <br />
            conceived reality
          </span>
        </div>
        <RecentPosts posts={posts} />
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      posts,
    },
  };
};

export default Home;

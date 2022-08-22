
import { InferGetStaticPropsType } from "next";
import Container from "components/Container";
import RecentPosts from "components/RecentPosts";
import { allBlogs } from "contentlayer/generated";
import Main from "components/Main";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <div className={`my-5 w-full`}>
        <Main />
        <RecentPosts posts={posts} />
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allBlogs.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};
export default Home;

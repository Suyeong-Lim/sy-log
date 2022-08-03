import BlogPost from "../components/BlogPost";
import Container from "../components/Container";
import { allBlogs } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { compareDesc, format, parseISO } from "date-fns";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <div className={`mt-3 flex flex-col`}>
        {posts.map((post) => (
          <BlogPost
            date={post.date}
            title={post.title}
            des={post.description}
            slug={post.slug}
            key={post._id}
          />
        ))}
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allBlogs.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return {
    props: {
      posts,
    },
  };
};

export default Blog;

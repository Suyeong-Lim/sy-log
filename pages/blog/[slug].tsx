import { allBlogs } from "contentlayer/generated";
import BlogLayout from "layouts/blog";

const PostPage = ({ post }) => {
  return <BlogLayout post={post} />;
};

export const getStaticPaths = async () => {
  const paths = allBlogs.map((blog) => ({ params: { slug: blog.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allBlogs.find((blog) => blog.slug === params.slug);
  return {
    props: {
      post,
    },
  };
};
export default PostPage;

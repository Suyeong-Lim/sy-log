import BlogPost from "../components/BlogPost";
import Container from "../components/Container";
const Blog = () => {
  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        <BlogPost />
      </div>
      <span className={`font-bold`}>BLOG</span>
    </Container>
  );
};

export default Blog;

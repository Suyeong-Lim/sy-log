import { useState } from "react";
import BlogPost from "../components/BlogPost";
import Container from "../components/Container";
import { allBlogs } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { compareDesc } from "date-fns";
import Filter from "components/Filter";
import tw from "twin.macro";

const Blog = ({
  posts,
  category,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [pageposts, setPagePosts] = useState(posts);

  const [selectedFilter, setSelectedFilter] = useState([]);

  const clickCategory = (clickedCategory) => {
    const selectedFilterList = selectedFilter.includes(clickedCategory)
      ? selectedFilter.filter((selected) => selected !== clickedCategory)
      : [...selectedFilter, clickedCategory];

    setSelectedFilter(selectedFilterList);
  };

  const filterData = pageposts.filter((post) =>
    selectedFilter.every((item) => post.tags.includes(item))
  );

  const postList = filterData.length !== 0 ? filterData : [];
  return (
    <Container>
      <section>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Article
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {`개발, UXUI 등 관심분야의 정리된 글을 작성하고 있습니다. 총 ${posts.length} 개의 글이 작성되었습니다.`}
        </p>
        <TagHd>Tags</TagHd>
        <hr className={`border-2 border-gray-600 w-40 mt-1 mb-2`} />
        <Filter
          category={category}
          selectedFilter={selectedFilter}
          clickCategory={clickCategory}
        />
      </section>
      <section className={`mt-3 flex flex-col`}>
        <h1 className="mb-4 text-2xl font-bold tracking-tight text-gray-600 md:text-5xl dark:text-white mt-5">
          All Posts
        </h1>

        {postList.map((post) => (
          <BlogPost
            date={post.date}
            title={post.title}
            des={post.description}
            tags={post.tags}
            slug={post.slug}
            key={post._id}
          />
        ))}
      </section>
    </Container>
  );
};

const TagHd = tw.p`
font-bold
text-base
text-gray-600
mb-1
text-2xl
`;

export const getStaticProps = async () => {
  const posts = allBlogs.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  const category = allBlogs
    .map((post) => post.tags)
    .flat()
    .reduce((ac, v) => (ac.includes(v) ? ac : ac.concat(v)), []);

  return {
    props: {
      posts,
      category,
    },
  };
};

export default Blog;

import { useState } from "react";
import { InferGetStaticPropsType } from "next";
import Container from "components/Container";
import RecentPosts from "components/RecentPosts";
import { allBlogs } from "contentlayer/generated";
import Filter from "components/Filter";
import Main from "components/Main";

const Home = ({
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
      <div className={`my-5 w-full`}>
        <Main />
        <Filter
          category={category}
          clickCategory={clickCategory}
          selectedFilter={selectedFilter}
        />
        <RecentPosts posts={postList} />
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allBlogs.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
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
export default Home;

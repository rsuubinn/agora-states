import { useState } from "react";
import { useQuery } from "react-query";
import { fetchDiscussions } from "../api/api";
import Discussions from "../components/Discussions";
import Pagination from "../components/Pagination";
import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

function Home() {
  const { isLoading, data } = useQuery(["discussions"], fetchDiscussions); // discussions 데이터 가져오기
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  return (
    <Container>
      <Header />
      {data ? (
        <>
          <Discussions isLoading={isLoading} discussions={currentPosts(data)} />
          <Pagination
            postsPerpage={postsPerPage}
            totalPosts={data.length}
            paginate={setCurrentPage}
          ></Pagination>
        </>
      ) : null}
    </Container>
  );
}

export default Home;

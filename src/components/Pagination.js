import styled from "styled-components";

const PageUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const PageLi = styled.li`
  margin-right: 10px;
  &:hover {
    color: #8369e2;
  }
`;

const PageSpan = styled.span`
  cursor: pointer;
  border: 1px solid gray;
  padding: 5px 10px;
`;

function Pagination({ postsPerpage, totalPosts, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerpage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <PageUl className="pagination">
          {pageNumbers.map((number) => (
            <PageLi key={number} className="page-item">
              <PageSpan onClick={() => paginate(number)} className="page-link">
                {number}
              </PageSpan>
            </PageLi>
          ))}
        </PageUl>
      </nav>
    </div>
  );
}

export default Pagination;

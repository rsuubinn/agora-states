import styled from "styled-components";
import Discussion from "./Discussion";

const DiscussionsList = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 10px;
  padding-top: 10vh;
  padding-bottom: 0;
  height: 80vh;
`;

function Discussions({ isLoading, discussions }) {
  return (
    <div>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <DiscussionsList>
          {discussions.map((discussion) => (
            <Discussion key={discussion.id} discussion={discussion} />
          ))}
        </DiscussionsList>
      )}
    </div>
  );
}
export default Discussions;

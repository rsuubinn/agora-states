import styled from "styled-components";
import Discussion from "./Discussion";

const DiscussionsList = styled.div``;

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
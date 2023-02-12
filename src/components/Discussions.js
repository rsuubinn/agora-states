import styled from "styled-components";
import Discussion from "./Discussion";
import { AnimatePresence, motion } from "framer-motion";

const DiscussionsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 30px;
  width: 60%;
  height: 80%;
  margin-top: 5em;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const discussionVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
  },
};

function Discussions({ isLoading, discussions }) {
  return (
    <div>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <DiscussionsList>
          {discussions.map((discussion) => (
            <Discussion
              key={discussion.id}
              discussion={discussion}
              variants={discussionVariants}
              initial="normal"
              whileHover="hover"
            />
          ))}
        </DiscussionsList>
      )}
    </div>
  );
}
export default Discussions;

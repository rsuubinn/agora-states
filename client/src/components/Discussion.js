import { AnimatePresence, motion } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { formatCreatedAt } from "../utils/formatCreatedAt";
import DiscussionDetail from "./DiscussionDetail";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: white;
  cursor: pointer;
  padding: 1em 2em;
  border-radius: 15px;
  width: 60%;
`;

const Img = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const Title = styled.span`
  font-size: 1.3em;
  font-weight: 600;
  margin-bottom: 25px;
`;

const Div = styled.div`
  color: #bababa;
  margin-bottom: 10px;
`;

const Author = styled.span`
  margin-right: 7px;
`;

const CreatedAt = styled.span`
  margin-left: 7px;
`;

const AnswerOk = styled.div`
  background-color: #dbecda;
  width: 20%;
  text-align: center;
  padding: 5px 7px;
  border-radius: 15px;
  font-size: 14px;
  & > .toggle {
    color: #6c9b7d;
  }
`;

const AnswerNo = styled.div`
  background-color: #f1f0f0;
  width: 20%;
  text-align: center;
  padding: 5px 7px;
  border-radius: 15px;
  font-size: 14px;
  & > .toggle {
    color: #91918d;
  }
`;

const containerVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      delay: 0.2,
      type: "tween",
    },
  },
};

function Discussion({ discussion }) {
  const navigate = useNavigate();
  const discussionMatch = useMatch("/discussion/:discussionId");
  const onDiscussionClick = (discussionId) => {
    navigate(`/discussion/${discussionId}`);
  };
  return (
    <>
      <Container
        variants={containerVariants}
        initial="normal"
        whileHover="hover"
        transition={{ type: "tween" }}
        onClick={() => {
          onDiscussionClick(discussion.id);
        }}
      >
        <Img src={discussion.avatarUrl} />
        <Title>{discussion.title}</Title>
        <Div>
          <Author>{discussion.author}</Author>|
          <CreatedAt>{formatCreatedAt(discussion.createdAt)}</CreatedAt>
        </Div>
        {discussion.answer ? (
          <AnswerOk>
            <span className="toggle">●</span> 답변 완료
          </AnswerOk>
        ) : (
          <AnswerNo>
            <span>●</span> 답변 대기
          </AnswerNo>
        )}
      </Container>
      <AnimatePresence>
        {discussionMatch ? (
          <DiscussionDetail
            discussionId={discussionMatch.params.discussionId}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Discussion;

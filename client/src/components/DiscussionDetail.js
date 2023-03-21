import { AnimatePresence, motion } from "framer-motion";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fetchDiscussions } from "../api/api";
import ClearIcon from "@mui/icons-material/Clear";
import { formatCreatedAt } from "../utils/formatCreatedAt";

const Overlay = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
`;

const DiscussionBox = styled.div`
  width: 60vw;
  height: 80vh;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  background-color: #fafafb;
  border-radius: 15px;
  overflow-y: scroll;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  border-bottom: 2px solid #8369e2;
  margin-bottom: 20px;
`;

const H1 = styled.h1`
  font-size: 34px;
  color: #8369e2;
  font-weight: 600;
`;

const ExitBtn = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 2px solid #8369e2;
  color: #8369e2;
  background-color: transparent;
  cursor: pointer;
`;

const User = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f3f8;
  margin-bottom: 15px;
  padding: 10px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 10px;
  width: 40px;
  height: 40px;
`;

const Author = styled.span`
  font-weight: 600;
  margin-right: 10px;
`;

const CreatedAt = styled.span`
  color: gray;
`;

const Title = styled.span`
  font-size: 26px;
  font-weight: 600;
`;

const Question = styled.span`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const TopText = styled.span`
  color: #8369e2;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Body = styled.div`
  border: 2px solid #8369e2;
  padding: 15px;
  line-height: 1.3;
`;

const Answer = styled.span`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  & > .answer__topText {
    color: #238636;
  }
  & > .answer__user {
    background-color: #edf3ec;
  }
  & > .answer__body {
    border: 2px solid #238636;
  }
`;

const overlayVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};

function DiscussionDetail({ discussionId }) {
  const navigate = useNavigate();
  const { isLoading, data } = useQuery(["discussions"], fetchDiscussions);
  const discussion = data.filter(
    (discussion) => String(discussion.id) === discussionId
  )[0];

  const onGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <AnimatePresence>
        {isLoading ? null : (
          <>
            <Overlay
              onClick={onGoBack}
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
            {discussion ? (
              <>
                <DiscussionBox>
                  <Header>
                    <H1>Discussion</H1>
                    <ExitBtn onClick={onGoBack}>
                      <ClearIcon />
                    </ExitBtn>
                  </Header>
                  <Title>{discussion.title}</Title>
                  <Question>
                    <TopText>Question</TopText>
                    <User>
                      <Avatar src={discussion.avatarUrl} />
                      <Author>{discussion.author}</Author>
                      <CreatedAt>
                        {formatCreatedAt(discussion.createdAt)}
                      </CreatedAt>
                    </User>
                    <Body
                      dangerouslySetInnerHTML={{ __html: discussion.bodyHTML }}
                    ></Body>
                  </Question>
                  {discussion.answer ? (
                    <Answer>
                      <TopText className="answer__topText">Answer</TopText>
                      <User className="answer__user">
                        <Avatar src={discussion.answer.avatarUrl} />
                        <Author>{discussion.answer.author}</Author>
                        <CreatedAt>
                          {formatCreatedAt(discussion.answer.createdAt)}
                        </CreatedAt>
                      </User>
                      <Body
                        className="answer__body"
                        dangerouslySetInnerHTML={{
                          __html: discussion.answer.bodyHTML,
                        }}
                      ></Body>
                    </Answer>
                  ) : null}
                </DiscussionBox>
              </>
            ) : null}
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default DiscussionDetail;

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  cursor: pointer;
  padding: 1em 2em;
  border-radius: 15px;
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

const Toggle = styled.span``;

function Discussion({ discussion }) {
  const createdAt = new Date(discussion.createdAt);
  const createdAtDate = createdAt.toLocaleDateString("ko-KR");
  const createdAtTime = createdAt.toLocaleTimeString("ko-KR");
  return (
    <Container>
      <Img src={discussion.avatarUrl} />
      <Title>{discussion.title}</Title>
      <Div>
        <Author>{discussion.author}</Author>|
        <CreatedAt>
          {createdAtDate} {createdAtTime}
        </CreatedAt>
      </Div>
      {discussion.answer ? (
        <AnswerOk>
          <Toggle className="toggle">●</Toggle> 답변 완료
        </AnswerOk>
      ) : (
        <AnswerNo>
          <Toggle>●</Toggle> 답변 대기
        </AnswerNo>
      )}
    </Container>
  );
}

export default Discussion;
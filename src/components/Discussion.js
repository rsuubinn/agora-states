import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2em;
`;

const Img = styled.img`

    width: 5em;
    height: 5em;
    border-radius: 50%;
`;

function Discussion ({discussion}) {
    return (
        <Container>
            <Img src={discussion.avatarUrl} />
            <h1>{discussion.title}</h1>
        </Container>
    )
}

export default Discussion;
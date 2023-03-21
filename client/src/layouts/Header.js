import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  height: 4em;
  background-color: white;
  box-shadow: 0 4px 42px 0px rgb(0 0 0 / 15%);
  & > div {
    display: flex;
    align-items: center;
  }
`;
const Logo = styled.img`
  height: 50%;
  margin-left: 3em;
  margin-right: 1.5em;
`;

const Span = styled.span`
  font-size: 1.5em;
  font-weight: 300;
`;

const Button = styled.button`
  margin-right: 5em;
  border: none;
  padding: 1em 2em;
  cursor: pointer;
  background-color: #8369e2;
  border-radius: 10px;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
`;

const Form = styled.div`
  background-color: white;
  width: 60vw;
  height: 80vh;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
`;

function Header() {
  const [isClicked, setIsClicked] = useState(false);
  const makeDiscussion = () => {
    setIsClicked(true);
  };

  const onGoBack = () => {
    setIsClicked(false);
  };

  return (
    <Container>
      <div>
        <Logo src="https://www.codestates.com/_next/image?url=%2Fassets%2Fcommon%2Flogo%2Fcodestates-ci.png&w=128&q=75" />
        <Span>아고라스테이츠</Span>
      </div>
      <Button onClick={makeDiscussion}>질문하기</Button>
      {isClicked ? (
        <>
          <Overlay onClick={onGoBack} />
          <Form></Form>
        </>
      ) : null}
    </Container>
  );
}

export default Header;

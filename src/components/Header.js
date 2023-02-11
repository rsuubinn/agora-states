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
  border-bottom: 1px solid #b2b2b2;
  & > div {
    display: flex;
    align-items: center;
  }
`;
const Logo = styled.img`
  height: 50%;
  margin: 0 1em;
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

function Header() {
  return (
    <Container>
      <div>
        <Logo src="https://www.codestates.com/_next/image?url=%2Fassets%2Fcommon%2Flogo%2Fcodestates-ci.png&w=128&q=75" />
        <Span>아고라스테이츠</Span>
      </div>
      <Button>질문하기</Button>
    </Container>
  );
}

export default Header;

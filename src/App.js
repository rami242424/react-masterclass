import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color : white;
  background-color: yellowgreen;
  border : 0;
  border-radius: 15px;
`;

function App() {
  return (
    <Father>
      <Btn>Log in</Btn>
      <Btn as="a" href="/" >Log out</Btn>
    </Father>
  );
}

export default App;
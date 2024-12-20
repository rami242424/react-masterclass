import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  height: 100px;
  width: 100px;
`;

const Circle = styled.div`
  background-color: ${(props) => props.bgColor};
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;
function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}

export default App;
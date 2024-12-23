import { useState } from "react";
import styled, {ThemeProvider} from "styled-components";

const Title = styled.h1`
  color: ${ (props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height : 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${ (props) => props.theme.backgroundColor}
`;

const ToggleBtn = styled.button`
  color: ${ (props) => props.theme.textColor};
  background-color: ${ (props) => props.theme.backgroundColor}
`;

const darkTheme = {
  textColor : "whitesmoke",
  backgroundColor : "#111",
}
const lightTheme = {
  textColor : "#111",
  backgroundColor : "whitesmoke",
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme = {isDarkMode ? darkTheme : lightTheme}>
      <Wrapper>
        <Title>Helloooooo</Title>
        <ToggleBtn onClick={toggleTheme}>
          {isDarkMode ? "change to light theme" : "change to dark theme"}
        </ToggleBtn>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
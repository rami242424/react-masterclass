import React from 'react';
// 'react-dom/client'에서 createRoot 가져오기
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';

// 'root' 엘리먼트를 가져옴
const root = ReactDOM.createRoot(document.getElementById('root'));

const darkTheme = {
  textColor : "whitesmoke",
  backgroundColor: "#111",
}

const lightTheme = {
  textColor : "#111",
  backgroundColor: "whitesmoke",
}


// createRoot를 사용하여 렌더링
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

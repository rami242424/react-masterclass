import React from 'react';
import ReactDOM from 'react-dom/client'; // 'react-dom/client'에서 createRoot 가져오기
import App from './App';

// 'root' 엘리먼트를 가져옴
const root = ReactDOM.createRoot(document.getElementById('root'));

// createRoot를 사용하여 렌더링
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

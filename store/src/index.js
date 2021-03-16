import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { HashRouter } from 'react-router-dom'; //서버에 절대 전송 x 리액트가 안전하게 할수 있게 도와줌
//import { BroswerRouter } from 'react-router-dom'; 가끔가다가 서버한테 요청해서 서버가 오류 발생 가능성 서버 라우팅을 방지하는 API를 작성해야함
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

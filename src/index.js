import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
/* 
github pagesではbrowserからリクエストを送ると死ぬので、以下のHashRouterを使用。詳しくは以下のリンク参照。
https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing
*/
import { HashRouter as Router } from 'react-router-dom';

import BlogProvider from './components/BlogProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <BlogProvider>      
        <App />
      </BlogProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

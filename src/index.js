import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

import UsersPage from "./components/users/UsersPage";

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <UsersPage />
  </React.StrictMode>,
  document.getElementById('root')
);

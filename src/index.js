import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './STORE';

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import MainApp from './App';


const rootEl = document.getElementById('root');

const render = function() {
  ReactDOM.render(
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>,
    rootEl
  );
};

render();

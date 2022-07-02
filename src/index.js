import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UnderWork from './underWorking';


ReactDOM.render(
  <BrowserRouter>
    <UnderWork />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

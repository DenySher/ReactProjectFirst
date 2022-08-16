import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import stateData from './components/Redux/state';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App stateData={stateData} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);









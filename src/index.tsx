import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
);

export const dialogs = [
  { id: 1, name: 'Denis' },
  { id: 2, name: 'Alex' },
  { id: 3, name: 'Katya' },
  { id: 4, name: 'Anya' },
]

export const messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Hi, how are you?' },
  { id: 3, message: 'I am fine' },
  { id: 4, message: 'I is okey' },
]

export const myPostsData = [
  { id: 1, message: 'Hello,  how are you?', likesCounts: 20 },
  { id: 2, message: 'hi, i am fine', likesCounts: 30 },
]







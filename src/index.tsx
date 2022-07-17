import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    
  document.getElementById('root')
);



const btothers = [
  {
    name: 'Denis',
    age: 37,
    address: {
      country: 'Russian',
      sity: 'Moscow',
      now: true,
    }
  },
  {
    name: 'Alex',
    age: 32,
    address: {
      country: 'USA',
      sity: 'New York',
      now: false,
    }
  }
]

console.log(btothers[0].address.country) // если ушли с точки, то опять выбираем и нажимаем ctrl + пробел (и сразу видим следующую вложенность)

let a: Array<number | string> // выбираем тип данных "Массив" и определяем тип данных в самом массиве (в данном случае можно использовать как строки так и числа)
a = ['10'] 
a = [10]
a = ['age ' + 37]

 





 
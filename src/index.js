import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


function App() {
   const radios = [
    { name: 'High price', value: '1' },
    { name: 'Low price', value: '2' },
    
  ];

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
 
);



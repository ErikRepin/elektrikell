import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ReactDom - otve4aet za svjaz' mezdu reactom i DOM;
// DOM - (Document object model) - Eto struktura html document v javascript objekte.
const root = ReactDOM.createRoot(document.getElementById('root'));
// Zdes' my berjom iz document(DOM) element s id "root" i vstavljaem v etot element react prilozenie."
root.render(
    <App />
 
);
// render berjot React elementy/ component i obrabatqivaet iv v html(DOM)
//Prostoe objasnenie po4emu reat:
// iz-za componentov i sostojanija react izmenenija tol'ko to chto neobhodimo, sledstvenno rabota saita bqstraja.

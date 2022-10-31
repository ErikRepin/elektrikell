import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './services/stateService';
import { BrowserRouter } from 'react-router-dom';
// Provider eto vspomogatelnqi komponent dlja rabotq s hranilishem redux
//
const root = ReactDOM.createRoot(document.getElementById('root'));
// BrowserRouter - eto glavnqi komponent react routera kotorqi govorit, 4to zdes ispolzuetsja 
// marshrutq/Routes. marshrutq idut s adressa/url
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
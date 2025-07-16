import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelloWorldApp}  from './HelloWordApp';
import './styles.css'
import CounterApp from './CounterApp'

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp />
        <CounterApp value={30} />
    </React.StrictMode>
)
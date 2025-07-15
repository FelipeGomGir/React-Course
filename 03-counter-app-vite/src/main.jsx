import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelloWorldApp}  from './HelloWordApp';
import { FirstApp } from './FirstApp';
import './styles.css'

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp />
        <FirstApp title={1234} subtitle="Hola" />
    </React.StrictMode>
)
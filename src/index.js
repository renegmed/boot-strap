import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/stylesheet.css';
import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
 
import { StrictMode, useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './Components/Card.jsx'


  createRoot(document.getElementById('root')).render(

    <StrictMode>


   
   
    <App/>

  </StrictMode>,
)

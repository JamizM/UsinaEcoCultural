import React from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login'
import PaginaInicial from './PaginaInicial';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // atributos para rotas de páginas

function App() {
    return (
      <div>
        <PaginaInicial/>
        <Login/> 
      </div>
    );
  } 

export default App;
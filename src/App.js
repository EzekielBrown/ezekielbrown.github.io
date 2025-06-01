// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Background from './components/Background';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ShopPage from './pages/ShopPage';
import './main.css';

function App() {
  return (
    <BrowserRouter>
      <Background>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </Background>
    </BrowserRouter>
  );
}

export default App;
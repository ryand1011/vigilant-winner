import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import './App.css';
import { MainLayout } from './components/layout/MainLayout';
import { NotFound } from './components/pages/NotFound';

function App() {
  // define theme
  const theme = createTheme({
    palette: {
      primary: {
        light: '#63b8ff',
        main: '#0989e3',
        dark: '#005db0',
        contrastText: '#000',
      },
      secondary: {
        main: '#4db6ac',
        light: '#82e9de',
        dark: '#00867d',
        contrastText: '#000',
      },
    },
  });

  return (
    <Routes>
      <Route path="/" element={<MainLayout message="welcome" />} />
      <Route path="/about" element={<h1>About Page</h1>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

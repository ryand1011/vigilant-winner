import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import { MainLayout } from './components/layout/MainLayout';
import { NotFound } from './components/pages/NotFound';

function App() {
  // define theme
  const theme = createTheme({
    palette: {
      primary: {
        light: '#65C37D',
        main: '#3fb55d',
        dark: '#2C7E41',
        contrastText: '#000',
      },
      secondary: {
        main: '#0200F5',
        light: '#3433F7',
        dark: '#0100AB',
        contrastText: '#000',
      },
      error: {
        main: '#de2014',
        light: '#E44C43',
        dark: '#9B160E',
        contrastText: '#000',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

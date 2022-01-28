// import './App.css';
import React from 'react';

import RegisterLoginModal from '/src/components/RegisterLoginModal/RegisterLoginModal';

import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import SellHousePage from './pages/SellHousePage/SellHousePage';
import theme from './theme/theme';

function App() {
  const [LoggedIn, setLoggedIn] = React.useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user" element={<h1>USER PAGE</h1>} />
            <Route path="/favorites" element={<h1>FAVORITES</h1>} />
            <Route path="/sell-house" element={<SellHousePage />} />
          </Routes>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

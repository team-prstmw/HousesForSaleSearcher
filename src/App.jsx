import './App.css';

import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RegisterLoginModal from '/src/components/RegisterLoginModal/RegisterLoginModal';

import ProfilePage from './pages/ProfilePage/ProfilePage';
import SellHousePage from './pages/SellHousePage/SellHousePage';
import theme from './theme/theme';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
          {/* <RegisterLoginModal /> */}
          <Routes>
            <Route path="/" element={<h1>INDEX PAGE</h1>} />
            <Route path="/user" element={<ProfilePage />} />
            <Route path="/favorites" element={<h1>FAVORITES</h1>} />
            <Route path="/sell-house" element={<SellHousePage />} />
          </Routes>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

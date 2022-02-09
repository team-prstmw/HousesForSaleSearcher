import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SellHousePage from '/src/pages/SellHousePage/SellHousePage';
import theme from '/src/theme/theme';

import HomePage from './pages/HomePage/HomePage';

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);

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

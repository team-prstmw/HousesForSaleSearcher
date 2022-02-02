import './App.css';

import { ThemeProvider } from '@mui/material/styles';
import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SellHousePage from '/src/pages/SellHousePage/SellHousePage';
import theme from '/src/theme/theme';

import { readAll } from './utils/api';

function App() {
  const [houses, setHouses] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [LoggedIn, setLoggedIn] = React.useState(false);

  const handleAsyncAction = React.useCallback(async (asyncAction) => {
    setLoading(() => true);
    try {
      await asyncAction();
    } catch (caughtError) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchHouses = useCallback(async () => {
    handleAsyncAction(async () => {
      const fetchedHouses = await readAll('houses');
      setHouses(() => fetchedHouses);
    });
  }, [handleAsyncAction]);

  useEffect(() => {
    fetchHouses();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<h1>INDEX PAGE</h1>} />
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

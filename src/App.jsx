import './App.css';

import { ThemeProvider } from '@mui/material/styles';
import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RegisterLoginModal from '/src/components/RegisterLoginModal/RegisterLoginModal';
import SellHousePage from '/src/pages/SellHousePage/SellHousePage';
import theme from '/src/theme/theme';

import AddHouseForm from './components/AddHouseForm/AddHouseForm';
// import { readAll, create } from '@/components/utils/api';
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
    } catch (error) {
      setError(() => true);
      // setErrorMessage(() => error.data.error.message);
    } finally {
      setLoading(() => false);
    }
  }, []);

  const fetchHouses = useCallback(async () => {
    handleAsyncAction(async () => {
      const houses = await readAll('houses');
      setHouses(() => houses);
      console.log({ houses });
    });
  }, [handleAsyncAction]);

  useEffect(() => {
    fetchHouses();
  }, []);
  // console.log('loading', loading);
  // console.log('error', error);

  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
          <SellHousePage />
          {/* <Routes>
            <Route path="/" element={<h1>INDEX PAGE</h1>} />
            <Route path="/user" element={<h1>USER PAGE</h1>} />
            <Route path="/favorites" element={<h1>FAVORITES</h1>} />
            <Route path="/sell-house" element={<SellHousePage />} />
          </Routes> */}
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

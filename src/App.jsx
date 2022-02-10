import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { readAll } from '/src/firebase';
import SellHousePage from '/src/pages/SellHousePage/SellHousePage';
import theme from '/src/theme/theme';

import HomePage from './pages/HomePage/HomePage';

function App() {
  const [houses, setHouses] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [LoggedIn, setLoggedIn] = useState(false);

  const handleAsyncAction = async (asyncAction) => {
    setLoading(() => true);
    try {
      await asyncAction();
    } catch (caughtError) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchHouses = async () => {
    handleAsyncAction(async () => {
      const fetchedHouses = await readAll('houses');
      setHouses(() => fetchedHouses);
    });
  };

  useEffect(() => {
    fetchHouses();
  }, []);

  const MAP_INIT = `https://maps.googleapis.com/maps/api/js?key=${
    import.meta.env.VITE_GOOGLE_API_KEY
  }&callback=initMap`;

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
        <script async defer src={MAP_INIT} />
      </div>
    </BrowserRouter>
  );
}

export default App;

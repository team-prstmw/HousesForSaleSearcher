import './App.css';

import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
// import { readAll, create } from '@/components/utils/api';
import { readAll } from './utils/api';

import AddHouseForm from './components/AddHouseForm/AddHouseForm';
import SellHousePage from './pages/SellHousePage/SellHousePage';
import theme from './utils/theme';

function App() {
  const [houses, setHouses] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

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
          <AddHouseForm />
          {/* <Routes>
            <Route path="/" element={<h1>INDEX PAGE</h1>} />
            <Route path="/user" element={<h1>USER PAGE</h1>} />
            <Route path="/addhouse" element={<h1>ADD_HOUSE PAGE</h1>} />
            <Route path="/favorites" element={<h1>FAVORITES</h1>} />
            <Route path="/sell-house" element={<SellHousePage />} />
          </Routes> */}
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

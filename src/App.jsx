import './App.css';

import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddHouseForm from './components/AddHouseForm/AddHouseForm';
import SellHousePage from './pages/SellHousePage/SellHousePage';
import theme from './utils/theme';

function App() {
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

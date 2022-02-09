import './App.css';

import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProfilePage from './pages/ProfilePage/ProfilePage';
import AccountSettingsView from './pages/ProfilePage/views/AccountSettingsView/AccountSettingsView';
import SellHouseView from './pages/ProfilePage/views/SellHouseView/SellHouseView';
import theme from './theme/theme';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<h1>INDEX PAGE</h1>} />
            <Route path="/user" element={<ProfilePage />}>
              <Route path="" exact element={<AccountSettingsView />} />
              <Route path="favourites" exact element={<div>favorites</div>} />
              <Route path="my-houses" exact element={<div>my house</div>} />
              <Route path="sell-house" exact element={<SellHouseView />} />
            </Route>
            <Route path="/favorites" element={<h1>FAVORITES</h1>} />
            <Route path="/sell-house" element={<SellHouseView />} />
          </Routes>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

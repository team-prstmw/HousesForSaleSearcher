import { ThemeProvider } from '@mui/material/styles';
import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import theme from '/src/theme/theme';

import LoginContext from './contexts/LoginContext';
import LoginProvider from './contexts/LoginProvider';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import AccountSettingsView from './pages/ProfilePage/views/AccountSettingsView/AccountSettingsView';
import SellHouseView from './pages/ProfilePage/views/SellHouseView/SellHouseView';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
          <LoginProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/user" element={localStorage.getItem('isloggedIn') ? <ProfilePage /> : <Navigate to="/" />}>
                <Route path="" exact element={<AccountSettingsView />} />
                <Route path="favourites" exact element={<div>favorites</div>} />
                <Route path="my-houses" exact element={<div>my house</div>} />
                <Route path="sell-house" exact element={<SellHouseView />} />
              </Route>
            </Routes>
          </LoginProvider>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

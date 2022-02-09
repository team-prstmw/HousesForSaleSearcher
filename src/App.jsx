import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import theme from '/src/theme/theme';

import LoginProvider from './contexts/LoginProvider';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import AccountSettingsView from './pages/ProfilePage/views/AccountSettingsView/AccountSettingsView';
import SellHouseView from './pages/ProfilePage/views/SellHouseView/SellHouseView';

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
          <LoginProvider LoggedIn={LoggedIn} setLoggedIn={setLoggedIn}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/user" element={<ProfilePage />}>
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

import './App.css';
import React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import RegisterLoginModal from './components/RegisterLoginModal/RegisterLoginModal';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7ED6DF',
      success: '#6ab04c',
      error: '#eb4d4b',
      contrastText: '#fff',
    },
    secondary: {
      main: '#535c68',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RegisterLoginModal />
      </div>
    </ThemeProvider>
  );
}

export default App;

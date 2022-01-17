import './App.css';

import { ThemeProvider } from '@mui/material/styles';

import theme from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div />
    </ThemeProvider>
  );
}

export default App;

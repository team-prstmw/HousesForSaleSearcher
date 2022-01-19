import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>INDEX PAGE</h1>} />
          <Route path="/user" element={<h1>USER PAGE</h1>} />
          <Route path="/addhouse" element={<h1>ADD_HOUSE PAGE</h1>} />
          <Route path="/favorites" element={<h1>FAVORITES</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

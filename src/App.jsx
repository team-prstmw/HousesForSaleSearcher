import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/register" element={<h1>REGISTER PAGE</h1>} />
          <Route path="/" element={<h1>INDEX PAGE</h1>} />
          <Route path="/login" element={<h1>LOGIN PAGE</h1>} />
          <Route path="/user" element={<h1>USER PAGE</h1>} />
          <Route path="/addhouse" element={<h1>ADD_HOUSE PAGE</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

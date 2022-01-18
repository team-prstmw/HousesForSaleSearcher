import './App.css';

import wrappedMap from './components/mapComponent';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <wrappedMap
        googleMapURL="https://www.google.com/maps/search/gdansk/"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}

export default App;

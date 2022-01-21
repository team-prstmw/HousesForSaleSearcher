import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';

import API_KEY from '../googleMapsApiKey';

function Map() {
  return <GoogleMap defaultZoom={12} defaultCenter={{ lat: 54.37, lng: 18.63 }} />;
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function MapComp() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}

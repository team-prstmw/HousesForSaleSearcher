import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

import API_KEY from './googleMapsApiKey';

// values for testing
const housesCoords = {
  house1: { lat: 54.415924, lng: 18.566982, avalible: true, id: 1 },
  house2: { lat: 54.410104, lng: 18.594983, avalible: true, id: 2 },
  house3: { lat: 54.395131, lng: 18.601079, avalible: false, id: 3 },
  house4: { lat: 54.389069, lng: 18.583625, avalible: true, id: 4 },
};
function Map() {
  return (
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: 54.37, lng: 18.63 }}>
      {Object.values(housesCoords)
        .filter((house) => house.avalible)
        .map((house) => (
          <Marker
            key={house.id}
            position={{
              lat: house.lat,
              lng: house.lng,
            }}
          />
        ))}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function GoogleMapComp() {
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

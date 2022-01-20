import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';

function Map() {
  return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 12, lng: 20 }} />;
}

const MapComp = withScriptjs(withGoogleMap(Map));

export default MapComp;

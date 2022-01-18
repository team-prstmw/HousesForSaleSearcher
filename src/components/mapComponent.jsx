import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';

function Map() {
  <div id="map-wrapper" className="map-wrapper">
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 0, lng: 0 }} />
  </div>;
}

const wrappedMap = withScriptjs(withGoogleMap(Map));
export default wrappedMap;

import { useEffect, useState } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

// import makeRequest from '../../utils/services/makeRequest';
import getAddresses from '../../utils/services/getAddresses';
import getCoordsFromAddress from '../../utils/services/getCoordsFromAddress';

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const HFSS_API = 'https://houses-for-sale-sandbox-default-rtdb.europe-west1.firebasedatabase.app/.json';

const housesCoords = [
  [54.415924, 18.566982],
  [54.410104, 18.594983],
  [54.395131, 18.601079],
  [54.389069, 18.583625],
];

function Map() {
  // eslint-disable-next-line no-undef
  // const geocoder = new google.maps.Geocoder();

  // const [housesCoords, setHousesCoords] = useState(null);

  // useEffect(() => {
  //   if (housesCoords === null)
  //     getCoordsFromAddress(getAddresses(HFSS_API), geocoder).then((data) => setHousesCoords(data));
  // });

  console.log(housesCoords);
  return (
    <GoogleMap defaultZoom={7} defaultCenter={{ lat: 54.37, lng: 18.63 }}>
      {housesCoords.map((coords) => {
        console.log(coords, 'in map coords');
        return (
          <Marker
            position={{
              lat: coords[0],
              lng: coords[1],
            }}
          />
        );
      })}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function GoogleMapComp() {
  return (
    <div style={{ width: '90%', height: '600px' }} sx={{}} className="google-map-container">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}

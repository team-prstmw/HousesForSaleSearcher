import { useEffect, useState } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

// import makeRequest from '../../utils/services/makeRequest';
import getAddresses from '../../utils/services/getAddresses';
import getCoordsFromAddress from '../../utils/services/getCoordsFromAddress';

// const geocodingUrl = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`;

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const HFSS_API = 'https://houses-for-sale-sandbox-default-rtdb.europe-west1.firebasedatabase.app/.json';

// const getA = async () => {
//   console.log(await getCoordsFromAddress());
// };
// getA();

// const housesCoords = {
//   house1: { lat: 54.415924, lng: 18.566982, avalible: true, id: 1 },
//   house2: { lat: 54.410104, lng: 18.594983, avalible: true, id: 2 },
//   house3: { lat: 54.395131, lng: 18.601079, avalible: false, id: 3 },
//   house4: { lat: 54.389069, lng: 18.583625, avalible: true, id: 4 },
// };

function Map() {
  // eslint-disable-next-line no-undef
  const geocoder = new google.maps.Geocoder();

  const [housesCoords, setHousesCoords] = useState(null);

  getCoordsFromAddress(getAddresses(HFSS_API), geocoder).then((data) => setHousesCoords(data));

  console.log(housesCoords);
  return (
    <GoogleMap defaultZoom={7} defaultCenter={{ lat: 54.37, lng: 18.63 }}>
      {housesCoords.map((house) => (
        <Marker
          position={{
            lat: house[0],
            lng: house[1],
          }}
        />
      ))}
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

// {Object.values(housesCoords)
//   .filter((house) => house.avalible)
//   .map((house) => (
//     <Marker
//       key={house.id}
//       position={{
//         lat: house.lat,
//         lng: house.lng,
//       }}
//     />
//   ))}

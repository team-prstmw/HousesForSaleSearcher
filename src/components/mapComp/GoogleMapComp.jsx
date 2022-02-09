import { useEffect, useState } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

import { readAll } from '../../utils/api/read';
import getCoordsFromAddress from '../../utils/services/getCoordsFromAddress';
import styles from './mapComponent.module.scss';

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

function Map() {
  const [housesCoords, setHousesCoords] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const geocoder = new google.maps.Geocoder();
    if (!housesCoords.length) getCoordsFromAddress(readAll('houses'), geocoder, setHousesCoords);
  }, [housesCoords.length]);

  return (
    <GoogleMap defaultZoom={6} defaultCenter={{ lat: 52.12, lng: 18.38 }}>
      {housesCoords.map((coords) => {
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

export default function GoogleMapComp() {
  const WrappedMap = withScriptjs(withGoogleMap(Map));
  return (
    <div className={styles.googleMapContainer}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}

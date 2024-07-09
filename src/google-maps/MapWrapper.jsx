// import {
//   APIProvider,
//   Map,
//   Pin,
//   AdvancedMarker,
//   useAdvancedMarkerRef,
//   MapControl,
// } from '@vis.gl/react-google-maps';
// import { useState } from 'react';
// import MapHandler from './MapHandler';
import { useJsApiLoader } from '@react-google-maps/api';
import Map from './Map';
import { libraries } from '../constant/google-map';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const MapWrapper = ({ MapWithAutoComplete }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: libraries,
  });

  if (!isLoaded) return <div>Map is Loading...</div>;

  if (MapWithAutoComplete) return <Map autoComplete={true} />;
  return <Map />;
};

export default MapWrapper;

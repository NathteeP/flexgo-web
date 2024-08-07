import { useJsApiLoader } from '@react-google-maps/api';
import Map from './Map';
import { libraries } from '../constant/google-map';
import MapWithMarker from './MapWithMarker';
import MapWithNearbyPlace from './MapWithNearbyPlace';
const MapWrapper = ({
  MapWithAutoComplete,
  mapWithMarker,
  marker,
  mapWithNearbyPlace,
  nearbyPlace,
  accom,
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: libraries,
  });

  if (!isLoaded) return <div>Map is Loading...</div>;

  if (MapWithAutoComplete) {
    return <Map autoComplete={true} />;
  } else if (mapWithMarker) {
    return <MapWithMarker marker={marker} />;
  } else if (mapWithNearbyPlace) {
    return <MapWithNearbyPlace accom={accom} nearbyPlace={nearbyPlace} />;
  }
  return <Map />;
};

export default MapWrapper;

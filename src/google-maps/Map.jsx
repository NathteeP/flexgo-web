import { useMemo, useRef, useCallback, useState } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import '../index.css';
import PlaceAutoComplete from './PlaceAutoComplete';
import { useSelector } from 'react-redux';
import { defaultAddress } from '../constant/google-map';
import GMapMarker from './GMapMarker';
import { useDispatch } from 'react-redux';
import {
  setAccomLocation,
  setGMapAddress,
} from '../store/slices/hostForm-slice';

export default function Map({ autoComplete }) {
  const { accom, gMapAddress } = useSelector((state) => state.hostForm);
  const { coordinate } = accom;
  const dispatch = useDispatch();
  const [showInfo, setShowInfo] = useState(false);

  const mapRef = useRef();

  const options = useMemo(
    () => ({
      disabledDefaultUI: true,
      clickableIcons: true,
    }),
    []
  );
  const onLoad = useCallback((map) => (mapRef.current = map), []);

  return (
    <div className='flex flex-col gap-5'>
      {autoComplete && (
        <PlaceAutoComplete
          setAddress={(address) => dispatch(setGMapAddress(address))}
          setPlace={(position) => {
            dispatch(setAccomLocation(position));
            mapRef.current.panTo(position);
          }}
        />
      )}
      <GoogleMap
        zoom={11}
        center={coordinate}
        options={options}
        mapContainerClassName='map-container'
        onLoad={onLoad}
      >
        <GMapMarker
          position={coordinate}
          address={gMapAddress}
          showInfo={showInfo}
          setShowInfo={setShowInfo}
        />
      </GoogleMap>
    </div>
  );
}

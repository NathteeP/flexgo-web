import {
  GoogleMap,
  Marker,
  InfoWindow,
  OverlayView,
} from '@react-google-maps/api';
import '../index.css';
import { useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { defaultAddress } from '../constant/google-map';

export default function MapWithMarker() {
  const { nearbyPlace, accom } = useSelector((state) => state.accom.detail);

  const mapRef = useRef();

  const [defaultMarkerInfo, setShowDefaultMarkerInfo] = useState(false);

  const onLoad = useCallback((map) => (mapRef.current = map), []);
  return (
    <div className='w-[30rem] h-[30rem]'>
      <GoogleMap
        zoom={11}
        center={
          { lat: +accom.lat, lng: +accom.lng } || defaultAddress.coordinate
        }
        mapContainerClassName='map-marker-container'
        onLoad={onLoad}
      >
        <Marker
          onClick={() => setShowDefaultMarkerInfo(true)}
          position={
            { lat: +accom.lat, lng: +accom.lng } || defaultAddress.coordinate
          }
        >
          {defaultMarkerInfo && (
            <InfoWindow>
              <span>{accom.name}</span>
            </InfoWindow>
          )}
        </Marker>
        {nearbyPlace?.length >= 1
          ? nearbyPlace.map((item, index) => (
              <div key={index} className='text-red-500 bg-red-500'>
                <Marker
                  key={item.id}
                  icon={item.icon}
                  animation='BOUNCE'
                  position={{
                    lat: +item.coordinate.lat,
                    lng: +item.coordinate.lng,
                  }}
                ></Marker>
              </div>
            ))
          : null}
      </GoogleMap>
    </div>
  );
}

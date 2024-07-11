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

export default function MapWithMarker() {
  const { nearbyPlace, accom } = useSelector((state) => state.accom.detail);

  const mapRef = useRef();

  const [defaultMarkerInfo, setShowDefaultMarkerInfo] = useState(false);

  const onLoad = useCallback((map) => (mapRef.current = map), []);
  return (
    <div className='w-[30rem] h-[30rem]'>
      <GoogleMap
        zoom={11}
        center={{ lat: +accom.lat, lng: +accom.lng }}
        mapContainerClassName='map-marker-container'
        onLoad={onLoad}
      >
        <Marker
          onClick={() => setShowDefaultMarkerInfo(true)}
          position={{ lat: +accom.lat, lng: +accom.lng }}
        >
          {defaultMarkerInfo && <InfoWindow>{accom.name}</InfoWindow>}
        </Marker>
        {nearbyPlace?.length >= 1
          ? nearbyPlace.map((item, index) => (
              <Marker
                key={item.id}
                icon={item.icon}
                animation='BOUNCE'
                position={{
                  lat: +item.coordinate.lat,
                  lng: +item.coordinate.lng,
                }}
              ></Marker>
            ))
          : null}
      </GoogleMap>
    </div>
  );
}

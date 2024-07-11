import {
  GoogleMap,
  Marker,
  InfoWindow,
  OverlayView,
} from '@react-google-maps/api';
import '../index.css';
import GMapMarker from './GMapMarker';
import { useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function MapWithMarker() {
  const { desiredLocation, userLocation } = useSelector((state) => state.info);
  const { accomsList } = useSelector((state) => state.accoms);
  const { coordinate, address } = desiredLocation;
  const [showInfo, setShowInfo] = useState(accomsList.map((item) => false));

  const mapRef = useRef();

  console.log(showInfo);
  const [defaultMarkerInfo, setShowDefaultMarkerInfo] = useState(false);

  const toggleInfo = (index) => {
    const newState = showInfo.map((item, i) =>
      i === index ? !item : item === true ? false : false
    );
    setShowInfo(newState);
  };

  const onLoad = useCallback((map) => (mapRef.current = map), []);
  return (
    <div className='w-[30rem] h-[50rem]'>
      <GoogleMap
        zoom={11}
        center={coordinate}
        mapContainerClassName='map-marker-container'
        onLoad={onLoad}
      >
        <Marker position={coordinate}></Marker>
        {accomsList?.length >= 1
          ? accomsList?.map((item, index) => (
              <Marker
                animation='BOUNCE'
                onMouseOver={() => toggleInfo(index)}
                onMouseOut={() => toggleInfo(index)}
                position={{ lat: +item.lat, lng: +item.lng }}
              >
                {showInfo[index] && (
                  <OverlayView mapPaneName={OverlayView.MARKER_LAYER}>
                    <div className='custom-marker'>
                      <img src={item.accomPhoto[0].imagePath} alt='' />
                    </div>
                  </OverlayView>
                )}
              </Marker>
            ))
          : null}
      </GoogleMap>
    </div>
  );
}

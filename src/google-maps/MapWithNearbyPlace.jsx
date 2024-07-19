import {
  GoogleMap,
  Marker,
  InfoWindow,
  OverlayView,
} from '@react-google-maps/api';
import '../index.css';
import { useRef, useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { defaultAddress } from '../constant/google-map';

export default function MapWithNearbyPlace({ nearbyPlace, accom }) {
  const mapRef = useRef();
  const [zoomLevel, setZoomLevel] = useState(13); // เปลี่ยนค่าจาก 11 เป็น 15
  const [defaultMarkerInfo, setShowDefaultMarkerInfo] = useState(false);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
    map.addListener('zoom_changed', () => {
      setZoomLevel(map.getZoom());
    });
  }, []);

  const getIconSize = () => {
    // Adjust the size of the icon based on zoom level
    if (zoomLevel > 15) return 40;
    if (zoomLevel > 11) return 30;
    return 15;
  };

  const customIconStyle = {
    filter: 'grayscale(100%)',
    width: `${getIconSize()}px`,
    height: `${getIconSize()}px`,
  };

  return (
    <div className='w-[80vw] md:w-full h-[30rem] rounded-[40px] overflow-hidden m-auto'>
      <GoogleMap
        zoom={zoomLevel} // ใช้ zoomLevel ที่เริ่มต้นเป็น 15
        center={
          { lat: +accom.lat, lng: +accom.lng } || defaultAddress.coordinate
        }
        mapContainerClassName='map-marker-container'
        onLoad={onLoad}
      >
        <Marker
          onClick={() => setShowDefaultMarkerInfo(true)}
          position={{ lat: +accom.lat, lng: +accom.lng }}
        >
          {defaultMarkerInfo && (
            <InfoWindow>
              <span>{accom.name}</span>
            </InfoWindow>
          )}
        </Marker>
        {nearbyPlace?.length >= 1
          ? nearbyPlace.map((item, index) => (
              <OverlayView
                key={item.id}
                position={{
                  lat: +item.coordinate.lat,
                  lng: +item.coordinate.lng,
                }}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
                <div style={customIconStyle}>
                  <img
                    src={item.icon}
                    alt={`Marker ${index}`}
                    style={{
                      width: customIconStyle.width,
                      height: customIconStyle.height,
                      filter: customIconStyle.filter,
                    }}
                  />
                </div>
              </OverlayView>
            ))
          : null}
      </GoogleMap>
    </div>
  );
}

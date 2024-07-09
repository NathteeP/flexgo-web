import { Marker, InfoWindow } from '@react-google-maps/api';

export default function GMapMarker({
  position,
  address,
  showInfo,
  setShowInfo,
}) {
  return (
    <Marker
      animation='BOUNCE'
      onMouseOver={() => setShowInfo(true)}
      position={position}
      onPositionChanged={() => setShowInfo(true)}
    >
      {showInfo && (
        <InfoWindow onCloseClick={() => setShowInfo(false)} position={position}>
          <span>{address}</span>
        </InfoWindow>
      )}
    </Marker>
  );
}

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import PropTypes from "prop-types";
import { useState } from "react";
import "leaflet/dist/leaflet.css";

const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>¡Estás aquí!</Popup>
    </Marker>
  );
};

const MapComponent = ({ userLocation }) => {
  const defaultPosition = [51.505, -0.09]; // Default position if no user location

  const position = userLocation.lat !== 0 && userLocation.lon !== 0
    ? [userLocation.lat, userLocation.lon]
    : defaultPosition;

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer className="map-container" center={position} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        <LocationMarker /> {/* Integrando el marcador de la ubicación actual */}
      </MapContainer>
    </div>
  );
};

MapComponent.propTypes = {
  userLocation: PropTypes.shape({
    lat: PropTypes.number,
    lon: PropTypes.number,
  }).isRequired,
};

export default MapComponent;

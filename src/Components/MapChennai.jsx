import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = () => {
  // Center of the map: latitude and longitude of Chennai, for example
  const position = [13.0827, 80.2707]; // Chennai coordinates

  return (
    <div className="h-[400px] w-[500px]">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Chennai, India <br /> This is a sample marker.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;

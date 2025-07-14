import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix Leaflet marker paths in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const FitBounds = ({ locations }) => {
  const map = useMap();

  useEffect(() => {
    if (locations.length === 0) return;

    const bounds = L.latLngBounds(
      locations.map((loc) => loc.coordinates.slice().reverse()) // [lat, lng]
    );
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [locations, map]);

  return null;
};

const TourMap = ({ locations }) => {
  if (!locations || locations.length === 0)
    return <p>No locations available.</p>;

  return (
    <MapContainer
  center={[0, 0]}
  zoom={5}
  style={{
    height: "400px",
    width: "100%",
    pointerEvents: "none", // disables all user interaction
    userSelect: "none",
  }}
  zoomControl={false}
  scrollWheelZoom={false}
  doubleClickZoom={false}
  dragging={false}
  boxZoom={false}
  keyboard={false}
  touchZoom={false}
  attributionControl={false}
>

      <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=lIeJJk3G7adsCzBhEBmy"
        attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> &copy; OpenStreetMap contributors'
        interactive={false}
      />

      <FitBounds locations={locations} />

      {locations.map((loc) => (
        <Marker key={loc._id} position={loc.coordinates.slice().reverse()}>
          <Popup>
            <strong>{loc.description}</strong> (Day {loc.day})
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default TourMap;

import { useEffect } from "react";
import { useMap } from "react-leaflet";

const FitMapBounds = ({ coordinates }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || coordinates.length === 0) return;

    const bounds = coordinates.map(coord => [coord[1], coord[0]]); // [lat, lng]
    map.fitBounds(bounds, { padding: [50, 50] }); // add padding so it doesn't touch edges
  }, [coordinates, map]);

  return null;
};

export default FitMapBounds;

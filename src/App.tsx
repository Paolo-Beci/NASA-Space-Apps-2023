import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZnJvc3NpcG9saXRvIiwiYSI6ImNsbmdhcW9vNzB5bXkyaW1uN2FnbjFoNm8ifQ.wRLvsqv8fbUst9qUM_EuUA";

function App() {
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map>(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default App;

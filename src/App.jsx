import DeckGL from "@deck.gl/react";
import { LineLayer } from "@deck.gl/layers";
import { Map } from "react-map-gl";
import { ParticleLayer } from "deck.gl-particle";

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiZnJvc3NpcG9saXRvIiwiYSI6ImNsbmdhcW9vNzB5bXkyaW1uN2FnbjFoNm8ifQ.wRLvsqv8fbUst9qUM_EuUA";

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: 7.6869,
  latitude: 45.0703 ,
  zoom: 12,
  pitch: 0,
  bearing: 0,
};

// Data to be used by the LineLayer
const data = [
  {
    sourcePosition: [-122.41669, 37.7853],
    targetPosition: [-122.41669, 37.781],
  },
];

function App() {
  const config = {
    rotate: false,
    particle: {
      numParticles: 5000,
      maxAge: 50,
      speedFactor: 10,
      color: [127, 127, 127],
      width: 1,
      opacity: 1,
      animate: true,
    },
  };
  const layers = [
    new LineLayer({ id: "line-layer", data }),
    new ParticleLayer({
      id: "particle",
      // data properties
      image: "/wind_data.png",
      imageUnscale: [-128, 127],
      bounds: [-180, -90, 180, 90],
      // style properties
      numParticles: config.particle.numParticles,
      maxAge: config.particle.maxAge,
      speedFactor: config.particle.speedFactor,
      color: config.particle.color,
      width: config.particle.width,
      opacity: config.particle.opacity,
      animate: config.particle.animate,
      getPolygonOffset: () => [0, -1000],
    }),
  ];

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
    >
      <Map
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </DeckGL>
  );
}

export default App;

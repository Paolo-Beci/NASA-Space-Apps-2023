import React, { useCallback, useState } from 'react';import DeckGL from "@deck.gl/react";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";
import { Map as MapGL } from "react-map-gl";
import { ParticleLayer } from "deck.gl-particle";
import { ScatterplotLayer } from "@deck.gl/layers";
import Sidebar from './Sidebar';
import { useEffect } from 'react';

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiZnJvc3NpcG9saXRvIiwiYSI6ImNsbmdhcW9vNzB5bXkyaW1uN2FnbjFoNm8ifQ.wRLvsqv8fbUst9qUM_EuUA";

// Initial viewport settings
const POSITION = {
  longitude: 7.6869,
  latitude: 45.0703,
  zoom: 12,
  pitch: 0,
  bearing: 0,
};

function StandardMap(props) {
  const [heatmapVisible, setHeatmapVisible] = useState(true);
  const [scatterplotVisible, setScatterplotVisible] = useState(false);
  const [viewState, setViewState] = useState({ ...POSITION });

  // Sidebar
  const [openSidebar, setOpenSidebar] = useState(false);

  const updateViewState = (e) => {
    setViewState(e.viewState);
    if (e.viewState.zoom > 10) {
      setHeatmapVisible(false);
      setScatterplotVisible(true);
    } else {
      setHeatmapVisible(true);
      setScatterplotVisible(false);
    }
  }

  const layers = [
    new ScatterplotLayer({
      id: "scatter",
      data: "/fires_firms.json",
      opacity: 0.5,
      getPosition: (d) => [Number(d.longitude), Number(d.latitude)],
      getRadius: (d) => Number(d.bright_ti4),
      getFillColor: () => [255, 140, 0],
      getLineColor: () => [0, 0, 0],
      visible: scatterplotVisible,
    }),
    new HeatmapLayer({
      id: "hexagon-layer",
      data: "/fires_firms.json",
      opacity: 0.5,
      getPosition: (d) => [Number(d.longitude), Number(d.latitude)],
      getWeight: (d) => Number(d.bright_ti4),
      aggregation: "SUM",
      visible: heatmapVisible,
    }),
    new ParticleLayer({
      id: "wind",
      image: "/wind_data.png",
      imageUnscale: [-128, 127],
      bounds: [-180, -90, 180, 90],
      numParticles: 5000,
      maxAge: 50,
      speedFactor: 10,
      color: [255, 255, 255],
      width: 1,
      opacity: 0.8,
      animate: true,
      getPolygonOffset: () => [0, -1000],
    }),
  ];

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const onClick = useCallback(event => {
    setOpenSidebar(true);
  }, [])

  useEffect(() => {
    setViewState({
      longitude: props.longitude,
      latitude: props.latitude,
      zoom: 12,
      pitch: 0,
      bearing: 0,
    });
  } , [props.latitude, props.longitude]);

  return (
      <DeckGL viewState={viewState} onViewStateChange={updateViewState} controller={true} layers={layers} onClick={onClick}>
        <Sidebar open={openSidebar} toggleSidebar={toggleSidebar} />
        
        <MapGL
          mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
          mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
        >
        </MapGL>
        {/* TO DO marker for current position */}
      </DeckGL>
  );
}

export default StandardMap;

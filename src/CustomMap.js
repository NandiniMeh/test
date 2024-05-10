import "./App.css";
import React from "react";
import { Map, Marker } from "@vis.gl/react-google-maps";

const CustomMap = ({ latitude, longitude }) => {
  const location = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <div className="map-container">
      <Map
        style={{ borderRadius: "20px" }}
        defaultZoom={13}
        defaultCenter={location}
        gestureHandling={"greedy"}
        disableDefaultUI
      >
        <Marker position={location} />
      </Map>
    </div>
  );
};

export default CustomMap;
import React, { useState } from "react";
import "./css/Map.css";
import HeatMap from "../components/maps/HeatMap";
import ClusterMap from "../components/maps/ClusterMap";

function Map() {
  const [isheatMap, setIsheatMap] = useState(true);

  return (
    <div className="map-container">
      <button onClick={() => setIsheatMap((is) => !is)}>
        {`${isheatMap ? "Circle" : "Heat"} Map`}
      </button>
      {isheatMap ? (
        <HeatMap
          data={[
            { lat: 34.0522, lng: -118.2437, weight: 10 },
            { lat: 20, lng: -100, weight: 50 },
            { lat: 0.3, lng: 5.5, weight: 100 },
            { lat: -70, lng: 30, weight: 30 },
          ]}
        />
      ) : (
        <ClusterMap
          data={[
            { lat: 34.0522, lng: -118.2437 },
            { lat: 35.0522, lng: -118.2437 },
            { lat: 36.0522, lng: -118.2437 },
            { lat: 37.0522, lng: -118.2437 },
            { lat: 38.0522, lng: -118.2437 },
            { lat: 34.0522, lng: -118.2437 },
            { lat: 35.0522, lng: -118.2437 },
            { lat: 36.0522, lng: -118.2437 },
            { lat: 37.0522, lng: -118.2437 },
            { lat: 38.0522, lng: -118.2437 },
            { lat: 34.0522, lng: -118.2437 },
            { lat: 35.0522, lng: -118.2437 },
            { lat: 36.0522, lng: -118.2437 },
            { lat: 37.0522, lng: -118.2437 },
            { lat: 38.0522, lng: -118.2437 },
            { lat: 34.0522, lng: -118.2437 },
            { lat: 35.0522, lng: -118.2437 },
            { lat: 36.0522, lng: -118.2437 },
            { lat: 37.0522, lng: -118.2437 },
            { lat: 38.0522, lng: -118.2437 },
            { lat: 34.0522, lng: -118.2437 },
            { lat: 35.0522, lng: -118.2437 },
            { lat: 36.0522, lng: -118.2437 },
            { lat: 37.0522, lng: -118.2437 },
            { lat: 38.0522, lng: -118.2437 },
            { lat: 34.0522, lng: -118.2437 },
            { lat: 35.0522, lng: -118.2437 },
            { lat: 36.0522, lng: -118.2437 },
            { lat: 37.0522, lng: -118.2437 },
            { lat: 38.0522, lng: -118.2437 },
            { lat: 34.0522, lng: -118.2437 },
            { lat: 35.0522, lng: -118.2437 },
            { lat: 36.0522, lng: -118.2437 },
            { lat: 37.0522, lng: -118.2437 },
            { lat: 38.0522, lng: -118.2437 },
            { lat: 34.0522, lng: -118.2437 },
            { lat: 35.0522, lng: -118.2437 },
            { lat: 36.0522, lng: -118.2437 },
            { lat: 37.0522, lng: -118.2437 },
            { lat: 38.0522, lng: -118.2437 },
            { lat: 34.0522, lng: -118.2437 },
            { lat: 35.0522, lng: -118.2437 },
            { lat: 36.0522, lng: -118.2437 },
            { lat: 37.0522, lng: -118.2437 },
            { lat: 38.0522, lng: -118.2437 },
            { lat: 20, lng: -100 },
            { lat: 20, lng: -100 },
            { lat: 20, lng: -100 },
            { lat: 0.3, lng: 5.5 },
            { lat: 0.3, lng: 5.5 },
            { lat: 0.3, lng: 5.5 },
            { lat: -70, lng: 30 },
          ]}
        />
      )}
    </div>
  );
}

export default Map;

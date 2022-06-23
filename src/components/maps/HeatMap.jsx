import React from "react";
import GoogleMap from "./GoogleMap";

const HeatMap = ({ data }) => {
  const heatmapData = {
    positions: data,
    options: {
      radius: 20,
      opacity: 0.8,
    },
  };

  return (
    <GoogleMap
      defaultZoom={4}
      defaultCenter={{ lat: -11.657, lng: -52.062 }}
      heatmap={heatmapData}
      bootstrapURLKeys={{
        key: process.env.REACT_APP_MAP_KEY,
        libraries: ["visualization"],
      }}
      yesIWantToUseGoogleMapApiInternals
    ></GoogleMap>
  );
};

export default HeatMap;

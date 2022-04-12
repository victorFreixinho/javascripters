import React from "react";
import GoogleMap from "./GoogleMap";

const LOS_ANGELES_CENTER = [34.0522, -118.2437];

//  data:
//  Array<{
//      lat: number,
//      lng: number,
//      weight: number,
//  }>
const HeatMap = ({ data }) => {
  const heatmapData = {
    positions: data,
    options: {
      radius: 30,
      opacity: 1,
    },
  };

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={LOS_ANGELES_CENTER}
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

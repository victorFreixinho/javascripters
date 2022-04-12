import React, { useState, useRef } from "react";
import useSupercluster from "use-supercluster";
import styled from "styled-components";
import GoogleMap from "./GoogleMap";

const LOS_ANGELES_CENTER = [34.0522, -118.2437];
const Marker = ({ children }) => children;

//  data:
//  Array<{
//      lat: number,
//      lng: number
//  }>
export default function ClusterMap({ data }) {
  const mapRef = useRef();
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);

  const points = data.map((d) => ({
    type: "Feature",
    properties: { cluster: true },
    geometry: {
      type: "Point",
      coordinates: [parseFloat(d.lng), parseFloat(d.lat)],
    },
  }));

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 40 },
  });
  return (
    <GoogleMap
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
      defaultCenter={LOS_ANGELES_CENTER}
      defaultZoom={10}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map }) => {
        mapRef.current = map;
      }}
      onChange={({ zoom, bounds }) => {
        setZoom(zoom);
        setBounds([bounds.nw.lng, bounds.se.lat, bounds.se.lng, bounds.nw.lat]);
      }}
    >
      {clusters.map((cluster) => {
        const [longitude, latitude] = cluster.geometry.coordinates;
        const { point_count: pointCount } = cluster.properties;
        if (!longitude || !latitude) return null;
        return (
          <Marker
            key={
              cluster.id
                ? `cluster-${cluster.id}`
                : `cluster-${latitude}${longitude}`
            }
            lat={latitude}
            lng={longitude}
          >
            <CLusterMarker
              pointCount={pointCount ?? 1}
              pointsLength={points.length}
              onClick={() => {
                let expansionZoom = 20;
                try {
                  expansionZoom = Math.min(
                    supercluster.getClusterExpansionZoom(cluster?.id),
                    20
                  );
                } catch {}
                mapRef.current.setZoom(expansionZoom);
                mapRef.current.panTo({ lat: latitude, lng: longitude });
              }}
            >
              {pointCount ?? 1}
            </CLusterMarker>
          </Marker>
        );
      })}
    </GoogleMap>
  );
}

const CLusterMarker = styled.div.attrs((props) => props)`
  color: #fff;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => 10 + (props.pointCount / props.pointsLength) * 20}px;
  height: ${(props) => 10 + (props.pointCount / props.pointsLength) * 20}px;
  background: ${(props) => {
    return `rgb(255,${100 * (1 - props.pointCount / props.pointsLength)}, ${
      100 * (1 - props.pointCount / props.pointsLength)
    })`;
  }};
`;

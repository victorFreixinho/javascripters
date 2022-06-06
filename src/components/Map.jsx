import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import "../styles/App.css";
import { selectOccurrences } from "../states/modules/diseases/disease.utils";

function Map() {
  const occurrences = useSelector(selectOccurrences);

  const markers = [
    [-10, -50],
    [-14, -54],
    [-5, -60],
  ];

  return (
    <Card
      sx={{ width: "55vw", height: "70vh", minWidth: 300, margin: 5 }}
      className="bg-light"
    >
      <div>
        <MapContainer center={[-25, -28]} zoom={4} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {occurrences.map((occurrence, index) => (
            <Marker
              position={[occurrence.latitude, occurrence.longitude]}
              key={index}
            >
              {/* <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup> */}
            </Marker>
          ))}
        </MapContainer>
      </div>
    </Card>
  );
}

export default Map;

import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../styles/App.css";

function PointMap({ data }) {
  const occurrences = data;

  return (
    <Card
      sx={{ width: "90%", height: "100%", minWidth: 300 }}
      className="bg-light"
    >
      <div>
        <MapContainer
          center={[-18.657, -36.062]}
          zoom={4}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {occurrences.map((occurrence, index) => (
            <Marker
              position={[occurrence.latitude, occurrence.longitude]}
              key={index}
            ></Marker>
          ))}
        </MapContainer>
      </div>
    </Card>
  );
}

export default PointMap;

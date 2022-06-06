import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../styles/App.css';

function Map() {

  const markers = [[-10,-50], [-14,-54], [-5, -60]]

  return (
    <Card sx={{width: "55vw", height: "70vh", minWidth: 300, margin: 5 }} className='bg-light'>

    <div>
        <MapContainer center={[-25, -28]} zoom={4} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {markers.map((marker =>
              <Marker position={marker} key={marker[0]}>
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
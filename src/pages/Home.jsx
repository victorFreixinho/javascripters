import React from "react";
import "../styles/App.css";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import TopBar from "../components/TopBar";
import MapFilter from "../components/MapFilter";
import Map from "./Map";

function Home() {
  return (
    <div className="App">
      <TopBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <MapFilter />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;

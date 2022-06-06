import React from "react";
import "../styles/App.css";

import TopBar from "../components/TopBar";
import MapFilter from "../components/MapFilter";
import Map from "../components/Map";

function Home() {
  return (
    <div className="App">
      <TopBar />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <MapFilter />
        <Map />
      </div>
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectOccurrences } from "../states/modules/diseases/disease.utils";
import { Box, Card, Button, Tabs, Tab } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import HeatMap from "../components/maps/HeatMap";
import ClusterMap from "../components/maps/ClusterMap";
import PointMap from "../components/maps/PointMap";

import "../styles/Map.css";

function Map() {
  const [value, setValue] = useState("1");
  const occurrences = useSelector(selectOccurrences);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ margin: 5 }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              centered
            >
              <Tab label="Mapa de Calor" value="1" />
              <Tab label="Mapa de Cluster" value="2" />
              <Tab label="Mapa de Ocorrências" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="map-container">
              <HeatMap
                data={occurrences.map((occurrence) => ({
                  lat: occurrence.latitude,
                  lng: occurrence.longitude,
                  weight: 1,
                }))}
              />
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className="map-container">
              <ClusterMap
                data={occurrences.map((occurrence) => ({
                  lat: occurrence.latitude,
                  lng: occurrence.longitude,
                  weight: 1,
                }))}
              />
            </div>
          </TabPanel>
          <TabPanel value="3">
            <div className="map-container">
              <PointMap data={occurrences} />
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

export default Map;

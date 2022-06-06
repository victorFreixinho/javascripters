import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { useDispatch, useSelector } from "react-redux";
import { getOccurrences } from "../states/modules/diseases/disease";
import { selectOccurrences } from "../states/modules/diseases/disease.utils";

function MapFilter() {
  const dispatch = useDispatch();

  const occurrences = useSelector(selectOccurrences);

  const top100Films = [{ title: "Malária" }, { title: "Dengue" }];

  const regioes = [
    "Todo o Brasil",
    "Norte",
    "Nordeste",
    "Centro-Oeste",
    "Sudeste",
    "Sul",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const states = data.get("states");
    const diseases = data.get("diseases");
    console.log("PRINT: ", { states, diseases });
    dispatch(getOccurrences({ states, diseases }));
  };

  return (
    <Card
      sx={{ width: "30vw", height: "70vh", minWidth: 300, margin: 5 }}
      className="bg-light"
    >
      <Typography variant="h5" component="div" className="m-4">
        Filtrar no Mapa
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Box className="m-4 bg-white">
          <Autocomplete
            multiple
            id="tags-outlined"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                name="disease"
                label="Nome das Doenças"
                placeholder="Doença"
              />
            )}
          />
        </Box>

        <Box className="m-4 bg-white">
          <Autocomplete
            multiple
            id="tags-outlined"
            options={regioes}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                name="states"
                label="Regiões"
                placeholder="Região"
              />
            )}
          />
        </Box>

        <Box>
          <Button type="Enviar" variant="contained">
            Atualizar no mapa
          </Button>
        </Box>
      </Box>

      <div
        style={{
          borderTop: "1px solid grey",
          width: "90%",
          margin: "auto",
          marginTop: "20px",
        }}
      ></div>

      <Typography variant="h7" component="div" className="m-4">
        Marcadores encontrados:
        <br />7
      </Typography>

      <Box>
        <Button variant="contained">Gerar relatório em PDF</Button>
      </Box>
    </Card>
  );
}

export default MapFilter;

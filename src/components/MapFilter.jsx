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

    // const occurrences = useSelector(selectOccurrences());

    const [selectedDiseases, setSelectedDiseases] = useState(undefined);
    const [selectedStates, setSelectedStates] = useState(undefined);


    const diseasesOptions = ["Malária", "Dengue"];
    const statesOptions = ["AC","PA","RO","RR","TO","MA","PB","PE","PI","RN","SE","GO","MS","MT","ES","MG","RJ","SP","RS","SC","AM","AP","AL","BA","CE","PR",];
    
    const myHandleSubmit = (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // dispatch(getOccurrences({estadosSelected, doencasSelected}));
    };

    return (
        <Card
            sx={{ width: "30vw", height: "70vh", minWidth: 300, margin: 5 }}
            className="bg-light"
        >
            <Typography variant="h5" component="div" className="m-4">
                Filtrar no Mapa
            </Typography>



            <Box
                component="form"
                noValidate
                onSubmit={myHandleSubmit}
                sx={{ mt: 3 }}
            >

                <Box className="m-4 bg-white">
                  <Autocomplete
                  multiple
                  options={diseasesOptions}
                  filterSelectedOptions
                  value={selectedDiseases || []}
                  onChange={(event, selected_doencas) => {
                    setSelectedDiseases(selected_doencas);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Nome das Doenças" placeholder="Doença" margin="none"/>
                  )}
                  />
                </Box>

                <Box className="m-4 bg-white">
                  <Autocomplete
                    multiple
                    options={statesOptions}
                    filterSelectedOptions
                    value={selectedStates || []}
                    onChange={(event, selected_estados) => {
                      setSelectedStates(selected_estados);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Estados" placeholder="Estado" margin="none"/>
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
                <br />LEN.OCCURRENCES
            </Typography>

            <Box>
                <Button variant="contained">Gerar relatório em PDF</Button>
            </Box>
        </Card>
    );
}

export default MapFilter;

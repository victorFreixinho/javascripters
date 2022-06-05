import React, { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function MapFilter() {
  const [regiao, setRegiao] = useState('');

  const handleChange = (event) => {
    setRegiao(event.target.value);
  };

  const top100Films = [ {title: 'Malária'}, {title: 'Dengue'} ];

  const regioes = ['Todo o Brasil', 'Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul']

  return (
    <Card sx={{ width: "30vw", height: "70vh", minWidth: 300, margin: 5}} className='bg-light'>
      <Typography variant="h5" component="div" className="m-4">
        Filtrar no Mapa
      </Typography>

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
              label="Regiões"
              placeholder="Região"
            />
          )}
        />
      </Box>

      <Box>
        <Button variant="contained">Atualizar no mapa</Button>
      </Box>


      <div style={{borderTop: '1px solid grey', width: '90%', margin: 'auto', marginTop: '20px'}}></div>


      <Typography variant="h7" component="div" className="m-4">
        Marcadores encontrados:
        <br />
        7
      </Typography>

      <Box>
        <Button variant="contained">Gerar relatório em PDF</Button>
      </Box>

      {/* <Box className="m-4 bg-white">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Região</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={regiao}
            label="Região"
            onChange={handleChange}
          >
            <MenuItem value={'Todo o Brasil'}>Todo o Brasil</MenuItem>
            <MenuItem value={'Norte'}>Norte</MenuItem>
            <MenuItem value={'Nordeste'}>Nordeste</MenuItem>
            <MenuItem value={'Centro-Oeste'}>Centro-Oeste</MenuItem>
            <MenuItem value={'Sudeste'}>Sudeste</MenuItem>
            <MenuItem value={'Sul'}>Sul</MenuItem>

          </Select>
        </FormControl>
      </Box> */}

      {/* <Box className="m-4">
        <TextField fullWidth id="outlined-basic" label="Nome da doença" variant="outlined" />
      </Box> */}


    </Card>
  );
}

export default MapFilter;



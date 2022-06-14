import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { createDisease } from "../../../states/modules/diseases";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme();
toast.configure();

export default function AddDiseaseForm({ onSuccess }) {
  const dispatch = useDispatch();

  const [rate, setRate] = useState("");

  const handleChange = (event) => {
    setRate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    dispatch(
      createDisease({
        name: data.get("name"),
        rate,
        description: data.get("description"),
        callback: handleRegisterSuccess,
      })
    );
  };

  const handleRegisterSuccess = (success) => {
    const message = success
      ? "Doença adicionada com sucesso!"
      : "Falha na adição da nova doença.";
    onSuccess();
    if (success) {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  const rates = [
    {
      value: "Baixa",
      label: "Baixa",
    },
    {
      value: "Moderada",
      label: "Moderada",
    },
    {
      value: "Alta",
      label: "Alta",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastrar doença
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nome"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="rate"
                  select
                  required
                  label="Gravidade"
                  value={rate}
                  onChange={handleChange}
                  helperText="Selecione o nível de risco"
                >
                  {rates.map((rate) => (
                    <MenuItem key={rate.value} value={rate.value}>
                      {rate.label}
                    </MenuItem>
                  ))}
                </TextField>

                {/* <FormControl fullWidth>
                  <InputLabel id="rate-label">Gravidade</InputLabel>
                  <Select
                    labelId="rate-label"
                    id="rate"
                    value={rate}
                    label="Gravidade"
                    autoWidth
                    displayEmpty
                    autoComplete="Gravidade"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Baixa"}>Baixa</MenuItem>
                    <MenuItem value={"Moderada"}>Moderada</MenuItem>
                    <MenuItem value={"Alta"}>Alta</MenuItem>
                  </Select>
                </FormControl> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="description"
                  name="description"
                  fullWidth
                  id="description"
                  label="Descrição"
                  autoFocus
                  multiline
                  rows={6}
                />
              </Grid>
            </Grid>
            <Button
              type="Enviar"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

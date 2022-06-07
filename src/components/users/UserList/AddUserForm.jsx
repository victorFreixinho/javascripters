import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { register } from "../../../states/modules/users";

const theme = createTheme();

export default function AddUserForm({ onSuccess }) {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    dispatch(
      register({
        email: data.get("email"),
        password: data.get("password"),
        name: data.get("firstName"),
        lastname: data.get("lastName"),
        token: null,
        callback: handleRegisterSuccess,
      })
    );
  };

  const handleRegisterSuccess = (success) => {
    const message = success
      ? "Usuário adicionado com sucesso!"
      : "Falha na adição do novo usuário";
    if (success) onSuccess();
    alert(message);
  };

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
            Cadastrar usuário
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
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nome"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Sobrenome"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
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
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Já possui uma conta? Faça login!
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

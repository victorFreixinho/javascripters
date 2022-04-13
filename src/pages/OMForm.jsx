import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AppBar, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Inputs() {
  return (
    <>
      <Box
        component="span"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              CRUD OMs
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 5, width: "15ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="NomeOM"
            defaultValue="CTEX"
          />
          <TextField
            id="outlined-disabled"
            label="LatitudeOM"
            type="number"
            defaultValue="0.0"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-password-input"
            label="LongitudeOM"
            type="number"
            placeholder="0.0"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-read-only-input"
            label="RegiaoOM"
            defaultValue="Hello World"
          />
        </div>
      </Box>
    </>
  );
}

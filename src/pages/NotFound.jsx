import React from "react";
import "../styles/App.css";
import TopBar from "../components/TopBar";
import Typography from "@mui/material/Typography";

function NotFound() {
  return (
    <div className="App">
        <TopBar />

        <div classNam="container">
            <Typography variant="h5" component="div" className="m-5" align="justify">
                Erro: Tela não encontrada.
            </Typography>
        </div>
    </div>
  );
}

export default NotFound;

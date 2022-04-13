import React from "react";
import "../App.css";
import TopBar from "../components/TopBar";
import mapa from "../images/mapa_img.jpeg";
import {Form, Button} from 'react-bootstrap';

function Home() {
  return (
    <div className="App">
      <TopBar />
      <br />
      <div style={{display: "flex"}}>
        <div className="shadow-lg p-1 rounded" style={{backgroundColor: "white", height: "400px", width: "50%", margin: "20px"}}>
          <div style={{padding: "30px"}}>
            <h3>Escolha uma doença:</h3>
            <Form.Select size="lg">
              <option>Malária</option>
              <option>Febre amarela</option>
              <option>Tuberculose</option>
            </Form.Select>
            <br />
            <br />
            <h3>Escolha uma localidade:</h3>
            <Form.Select size="lg">
              <option>Todo o Brasil</option>
              <option>Norte</option>
              <option>Sul</option>
            </Form.Select>
            <br />
            <br />
            <Button variant="primary" size="lg">Filtrar no mapa</Button>{' '}
          </div>
        </div>
        <div style={{backgroundColor: "white", height: "400px", width: "50%", border: "1px solid black", margin: "20px"}}>
          <img src={mapa} alt="mapa-img" style={{width: "100%", height: "100%"}}/>
        </div>
      </div>
    </div>
  );
}

export default Home;

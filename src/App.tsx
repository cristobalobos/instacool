import React from "react";

import "./App.css";
import Button from "./components//Button";
import Card from "./components/Card";
import Container from "./components/Container";
import Input from "./components/Input";

class App extends React.Component {
  public render() {
    return (
      <Container>
        <Card>
          <Input placeholder="Correo" label="Correo" />
          <Input placeholder="Contraseña" label="Contraseña" />
          <Button>Enviar</Button>
        </Card>
      </Container>
    );
  }
}

export default App;

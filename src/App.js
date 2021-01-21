import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioDeCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h2" align="center">
          Formulário de Cadastro
        </Typography>
        <FormularioCadastro aoEnviar={aoEnviarFormulario} />
      </Container>
    );
  }
}

function aoEnviarFormulario(dados) {
    console.log(dados);
}

export default App;

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
        <FormularioCadastro aoEnviar={aoEnviarFormulario} validaCPF={validaCPF}/>
      </Container>
    );
  }
}

function aoEnviarFormulario(dados) {
  console.log(dados);
}

function validaCPF(cpf) {
  if (cpf.length != 11) {
    return { valido: false, texto: "o CPF deve ter 11 digitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

export default App;

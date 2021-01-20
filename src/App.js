import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioDeCadastro/FormularioCadastro";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Formulário de Cadastro</h1>
        <FormularioCadastro />
      </React.Fragment>
    );
  }
}

export default App;

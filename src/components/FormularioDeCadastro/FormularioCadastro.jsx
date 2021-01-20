import React from "react";
import Button from '@material-ui/core/Button';

function FormularioCadastro() {
  return (
    <form>
      <label htmlFor="">Nome</label>
      <input type="text" />

      <label htmlFor="">Sobrenome</label>
      <input type="text" />

      <label htmlFor="">CPF
      <input type="text" /></label>

      <label htmlFor="">Promoções</label>
      <input type="checkbox" />

      <label htmlFor="">Novidades</label>
      <input type="checkbox" />

      <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
    </form>
  );
}

export default FormularioCadastro;

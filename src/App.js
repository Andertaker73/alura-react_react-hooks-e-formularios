import { Container, Typography } from "@mui/material"
import { Component } from "react"
import "./App.css"
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro"
import "@fontsource/roboto"
import { validarCPF, validarSenha } from "./models/cadastro"
import ValidacoesCadastro from "./contexts/ValidacoesCadastro"

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    )
  }
}

function aoEnviarForm(dados) {
  // aqui posso fazer o que desejar com as informações obtidas
  // mas para esse curso estamos apenas exibindo no console do navegador
  console.log(dados)
}

export default App

import { Container, Typography } from "@mui/material"
import { Component } from "react"
import "./App.css"
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro"
import "@fontsource/roboto"
import { validarCPF, validarSenha } from "./models/cadastro"

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <FormularioCadastro
          aoEnviar={aoEnviarForm}
          validacoes={{ cpf: validarCPF, senha: validarSenha }}
        />
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

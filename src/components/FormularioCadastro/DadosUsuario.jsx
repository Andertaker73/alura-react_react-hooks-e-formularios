import { Button, TextField } from "@mui/material"
import React from "react"

function DadosUsuario({ aoEnviar }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        aoEnviar()
      }}
    >
      <TextField
        id="email"
        label="email"
        type="email"
        required
        margin="normal"
        fullWidth
      />
      <TextField
        id="senha"
        label="senha"
        type="password"
        required
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained">
        Próximo
      </Button>
    </form>
  )
}

export default DadosUsuario

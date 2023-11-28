import React from "react"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"

const BannerHorarioAtendimento = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "350px" }}
    >
      <Container style={{ maxWidth: "900px" }}>
        <Typography variant="subtitle2" align="center">
          <strong>Horário de Atendimento</strong>
        </Typography>
        <Typography variant="caption" align="center" paragraph>
          08:00h às 17:00h, de segunda a sexta-feira, em dias úteis
        </Typography>
        <Typography align="justify" paragraph>
          A Corregedoria-Geral da Justiça do Estado de Goiás, por meio do Art.
          90, #1º do Código de Normas e Procedimentos do Foro Extrajudicial,
          definiu que "O horário de atendimento ao público será das 8 (oito) às
          17 (dezessete) horas, de segunda a sexta-feira, em dias úteis,
          ininterruptamente."
        </Typography>
      </Container>
    </Grid>
  )
}

export default BannerHorarioAtendimento

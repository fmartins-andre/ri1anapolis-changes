import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import Button from "@material-ui/core/Button"
import useTheme from "@material-ui/styles/useTheme"
import clsx from "clsx"
import useStyles from "./styles"

const CertidaoPanel = props => {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <Container id="certidao-form-container">
      <Grid container>
        <Grid item className={clsx(classes.sections, classes.title)} sm={6}>
          <Typography variant="h5">
            Solicitação de{" "}
            <Typography component="span" variant="h5" noWrap>
              Certidões
            </Typography>
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.sections} style={{ order: 3 }}>
          <Typography paragraph>Prezados(as),</Typography>

          <Typography paragraph>
            Em virtude da criação do Serviço de Atendimento Eletrônico
            Compartilhado (SAEC), passaremos a recepcionar solicitações de
            certidões eletrônicas por meio do portal{" "}
            <Link
              href="https://registradores.onr.org.br/"
              target="_blank"
              className={classes.link}
            >
              https://registradores.onr.org.br/
            </Link>
            . Pedidos de certidões físicas poderão ser solicitados diretamente
            na sede da serventia.
          </Typography>

          <Typography paragraph>
            Não será mais possível a recepção de tais solicitações por site ou
            e-mail devido a vedação expressa contida no art. 33 do Provimento
            89/2019 do Conselho Nacional de Justiça.
          </Typography>

          <Typography paragraph>
            Para <strong>buscas e informações de bens imóveis</strong> sem a
            emissão de certidão, favor encaminhar a sua solicitação para o
            e-mail:{" "}
            <Link
              href="mailto:certidaoanapolis@gmail.com"
              target="_blank"
              className={classes.link}
            >
              certidaoanapolis@gmail.com
            </Link>
            .
          </Typography>

          <Typography>
            Clique nos links abaixo para assistir os vídeos explicativos de como
            processar sua demanda no site oficial da categoria.
          </Typography>
        </Grid>

        <Grid
          item
          container
          className={classes.sections}
          xs={12}
          style={{ order: 4 }}
        >
          <div className={classes.button}>
            <Button
              color="primary"
              variant="outlined"
              href="https://drive.google.com/file/d/1-YkGgT9Tf1AI_D-KmkfOUwJMUCnFG6sn/view"
              target="_blank"
              className={classes.link}
              fullWidth
            >
              Como se cadastrar
            </Button>
          </div>

          <div className={classes.button}>
            <Button
              color="primary"
              variant="outlined"
              href="https://drive.google.com/file/d/1jcYxyxV2UBqAZsbcY0e6gCpPPZmAR9nF/view"
              target="_blank"
              className={classes.link}
              fullWidth
            >
              Como solicitar certidão/buscas
            </Button>
          </div>
        </Grid>

        <Grid
          item
          container
          justifyContent="flex-end"
          sm={6}
          className={clsx(classes.sections, classes.buttonContainer)}
        >
          <div className={classes.button}>
            <Button
              color="primary"
              variant="contained"
              href="https://registradores.onr.org.br/"
              target="_blank"
              fullWidth
            >
              Solicitar Certidão/Busca
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CertidaoPanel

import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import makeStyles from "@material-ui/styles/makeStyles"
import useTheme from "@material-ui/styles/useTheme"

import AnchorLink from "react-anchor-link-smooth-scroll"

const useStyles = makeStyles(theme => ({
  banner: {
    width: "100%",
    height: "350px",
  },
  bannerTextWrapper: {
    padding: "10px 15px",
  },
}))

const BannerSolicitaCertidao = () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.banner}
    >
      <Grid
        item
        container
        xs={12}
        sm={10}
        className={classes.bannerTextWrapper}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="subtitle2" paragraph align="center">
          <strong>Certidões e Buscas</strong>
        </Typography>
        <Typography paragraph align="center">
          Certidões e buscas agora serão feitas pela SAEC - Serviço de
          Atendimento Eletrônico Compartilhado.
        </Typography>
        <Typography paragraph align="center">
          Acesse o SAEC e solicite sua Certidão.
        </Typography>
        <Button
          component={"a"}
          variant="contained"
          color="primary"
          align="center"
          href="https://registradores.onr.org.br/"
          target="_blank"
          noopener
          noreferrer
        >
          SOLICITAR CERTIDÕES / BUSCAS
        </Button>
      </Grid>
    </Grid>
  )
}

export default BannerSolicitaCertidao

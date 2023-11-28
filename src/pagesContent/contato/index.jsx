import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Link from "@material-ui/core/Link"
import Button from "@material-ui/core/Button"
import { Article, Section } from "../../components/section2"
import ContatoMap from "./contatoMap"
import useTheme from "@material-ui/styles/useTheme"

import InstagramIcon from "@material-ui/icons/Instagram"
import WhatsAppIcon from "@material-ui/icons/WhatsApp"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk"

import useStyles from "./styles"

const ContatoSectionContent = () => {
  const {
    file: { publicURL: place },
  } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "localizacao.svg" }) {
        publicURL
      }
    }
  `)

  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <>
      <Article id="contato" background="true">
        <Section style={{ textAlign: "center" }} xs={12} sm={12} md={9} lg={8}>
          <Typography component="h1" variant="h4">
            Endereço e Contato
          </Typography>

          <Typography paragraph>
            Agende um horário, tire dúvidas, faça uma visita. O atendimento
            presencial e pelos canais de comunicação se dá de segunda a
            sexta-feira das 08:00h as 17:00h.
          </Typography>

          <Grid container justifyContent="space-around">
            <Grid
              container
              item
              xs={12}
              sm={6}
              justifyContent="flex-end"
              alignItems="center"
              className={classes.channelListBlock}
            >
              <List dense={true}>
                <ListItem>
                  <ListItemText
                    className={classes.alignTextRight}
                    primary={
                      <Link
                        className={classes.contactLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ri1anapolis.page.link/rota"
                      >
                        Av. Universitária, nº 2221
                        <br /> Anashopping, LUC 100
                        <br /> Anápolis/GO
                        <br /> CEP: 75.083-350
                      </Link>
                    }
                  />
                  <ListItemIcon className={classes.listItemIcon}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://ri1anapolis.page.link/rota"
                    >
                      <img
                        src={place}
                        alt="Endereço: Av. Universitária, nº 2221 - Anashopping - Anápolis/GO"
                        className={classes.locationImg}
                      />
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <Button
                    size="small"
                    variant="outlined"
                    color="inherit"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://ri1anapolis.page.link/rota"
                    classes={{ root: classes.routeButton }}
                  >
                    Clique para traçar rota
                  </Button>
                </ListItem>
              </List>
            </Grid>

            <Grid
              container
              item
              xs={12}
              sm={6}
              alignItems="center"
              className={classes.channelListBlock}
            >
              <List dense={true}>
                <ListItem className={classes.listItem}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <MailOutlineIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body2">
                        email:{" "}
                        <Link
                          className={classes.contactLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="mailto:primeirocartorioregistro@gmail.com"
                        >
                          primeirocartorioregistro
                          <wbr />
                          @gmail.com
                        </Link>
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <PhoneInTalkIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body2">
                        telefone: <wbr />
                        <Link
                          className={classes.contactLink}
                          href="tel:+556239374650"
                        >
                          (62) 3937-4650
                        </Link>
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <WhatsAppIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body2">
                        whatsapp: <wbr />
                        <Link
                          className={classes.contactLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://wa.me/556239374650"
                        >
                          (62) 3937-4650
                        </Link>
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <InstagramIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body2">
                        instagram: <wbr />
                        <Link
                          className={classes.contactLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/ri1anapolis/"
                        >
                          @ri1anapolis
                        </Link>
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Section>
      </Article>
      <ContatoMap />
    </>
  )
}

export default ContatoSectionContent

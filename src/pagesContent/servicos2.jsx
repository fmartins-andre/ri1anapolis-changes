import React, { useEffect, useRef } from "react"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/styles/makeStyles"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import loadable from "@loadable/component"

import StyledButton from "../components/styledButton"
import { Article, Section, Aside } from "../components/section2"
import StyledDrawer from "../components/styledDrawerComponent"
import { useDrawerToggler } from "../components/styledDrawerComponent"
import createObserver from "../utils/createObserver"

const useStyles = makeStyles({
  hyphenate: {
    wordWrap: "break-word !important",
    overflowWrap: "break-word !important",
    "-webkit-hyphens": "auto",
    "-ms-hyphens": "auto",
    hyphens: "auto",
  },
})

const CertidaoPanel = loadable(() => import("./certidaoPanel"))
const DocumentosPanel = loadable(() => import("./documentosPanel2"))

const ServicosSectionContent = () => {
  const classes = useStyles()
  const handleDrawer = useDrawerToggler()
  const certidaoButtonRef = useRef(null)
  const documentosButtonRef = useRef(null)

  useEffect(() => {
    createObserver(certidaoButtonRef.current, CertidaoPanel.preload)
    createObserver(documentosButtonRef.current, DocumentosPanel.preload)
  }, [])

  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "servicos.png" }) {
        childImageSharp {
          fluid(maxWidth: 720, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Article id="servicos" background="true">
      <Aside>
        <Img
          fluid={image.file.childImageSharp.fluid}
          alt="Serviços disponíveis no site: Consulta de protocolos, Agendamento de atendimento e Solicitação de certidões e buscas!"
          style={{ width: "100%" }}
        />
      </Aside>
      <Section>
        <Typography component="h1" variant="h4">
          Serviços
        </Typography>

        <Typography
          align="left"
          component="h2"
          variant="subtitle2"
          id="certidoes"
        >
          <strong>Certidões</strong>
        </Typography>
        <Typography align="left" className={classes.hyphenate}>
          Solicite sua certidão física presencialmente na sede da serventia, ou
          a certidão eletrônica online, pelo portal SAEC.
        </Typography>

        <StyledButton
          ref={certidaoButtonRef}
          size="small"
          variant="contained"
          color="primary"
          onClick={handleDrawer("drawerCertidoes")}
        >
          Solicitar Certidão Eletrônica
        </StyledButton>

        <Typography paragraph />

        <Typography
          align="left"
          component="h2"
          variant="subtitle2"
          id="documentos"
        >
          <strong>Documentos para Registro</strong>
        </Typography>
        <Typography align="left" className={classes.hyphenate}>
          Baixe as listas de documentos necessários para registro, modelos,
          requerimentos e manuais.
        </Typography>
        <StyledButton
          ref={documentosButtonRef}
          size="small"
          variant="contained"
          color="primary"
          onClick={handleDrawer("drawerDocumentos2")}
        >
          Lista de Documentos
        </StyledButton>
      </Section>

      <StyledDrawer id="drawerCertidoes" anchor="bottom">
        <CertidaoPanel handleDrawer={handleDrawer("drawerCertidoes")} />
      </StyledDrawer>

      <StyledDrawer id="drawerDocumentos2">
        <DocumentosPanel />
      </StyledDrawer>
    </Article>
  )
}

export default ServicosSectionContent

import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Article, Section, Aside } from "../components/section2"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/styles/makeStyles"

const useStyles = makeStyles(theme => ({
  hyphenate: {
    wordWrap: "break-word !important",
    overflowWrap: "break-word !important",
    "-webkit-hyphens": "auto",
    "-ms-hyphens": "auto",
    hyphens: "auto",
  },
  columns: {
    [theme.breakpoints.up("sm")]: {
      columns: 2,
    },
  },
}))

const CartorioSectionContent = () => {
  const classes = useStyles()
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "cartorio.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Article id="cartorio">
      <Section lg={6}>
        <Typography component="h1" variant="h4">
          O Cartório
        </Typography>

        <Typography component="h2" variant="h6">
          Missão
        </Typography>
        <Typography paragraph className={classes.hyphenate}>
          Garantir a segurança jurídica, publicidade e eficácia dos atos
          jurídicos registrais de forma ágil, satisfatória e com qualidade, à
          luz da legislação vigente.
        </Typography>

        <Typography component="h2" variant="h6">
          Visão
        </Typography>
        <Typography paragraph className={classes.hyphenate}>
          Prestar um serviço público registral de excelência, com a melhor
          estrutura, equipe e tecnologias, visando a máxima eficiência no
          atendimento ao público, bem como na agilidade e conhecimento técnico
          nas análises dos títulos sujeitos à qualificação registral.
        </Typography>

        <Typography component="h2" variant="h6">
          Valores
        </Typography>
        <Typography paragraph className={classes.hyphenate}>
          São nossos valores, que devem permear todas as atividades
          desenvolvidas na Serventia:
        </Typography>
        <ul className={classes.columns}>
          <li>
            <strong>Profissionalismo</strong>
          </li>
          <li>
            <strong>Comprometimento</strong>
          </li>
          <li>
            <strong>Criatividade e Iniciativa</strong>
          </li>
          <li>
            <strong>Integridade Moral e Ética</strong>
          </li>
          <li>
            <strong>Impessoalidade e Justiça</strong>
          </li>
          <li>
            <strong>Eficiência</strong>
          </li>
          <li>
            <strong>Solidez Econômica</strong>
          </li>
          <li>
            <strong>Espírito de Equipe</strong>
          </li>
          <li>
            <strong>Respeito</strong>
          </li>
        </ul>
      </Section>
      <Aside lg={6}>
        <Img
          fluid={image.file.childImageSharp.fluid}
          alt="1º RI de Anápolis/GO: Eficiência e Profissionalismo!"
          style={{ width: "100%", height: "100%" }}
        />
      </Aside>
    </Article>
  )
}

export default CartorioSectionContent

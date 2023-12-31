import React from "react"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/styles/makeStyles"
import loadable from "@loadable/component"
import { Article, Section, Aside } from "../components/section2"
import SearchForm from "../components/searchProtocol2/searchForm"
import HelpIconButton from "../components/helpIconButton"
import HelpIcon from "@material-ui/icons/Help"

const SearchReport = loadable(() =>
  import("../components/searchProtocol2/searchReport")
)

const useStyles = makeStyles({
  hyphenate: {
    wordWrap: "break-word !important",
    overflowWrap: "break-word !important",
    "-webkit-hyphens": "auto",
    "-ms-hyphens": "auto",
    hyphens: "auto",
  },
})

const ProtocolosSectionContent = () => {
  const classes = useStyles()
  return (
    <Article id="protocolos">
      <Section md={6} lg={5}>
        <Typography component="h1" variant="h4">
          Protocolos
          <HelpIconButton
            ariaLabel="Precisa de ajuda?"
            tooltipTitle="Precisa de ajuda?"
            Icon={<HelpIcon />}
            link={{
              url: "https://ri1anapolis.page.link/ajuda_protocolo_site",
              text: "Assista um vídeo explicativo",
            }}
          />
        </Typography>

        <Typography className={classes.hyphenate}>
          Acompanhe o andamento do seu processo. Informe no campo abaixo o
          número do protocolo presente em seu recibo e faça uma busca.
        </Typography>

        <SearchForm
          id="protocolo"
          label="Protocolo"
          placeholder='Ex.: "120123"'
          buttonText="Buscar"
        />
        <br />
      </Section>

      <Aside md={6} lg={7}>
        <SearchReport />
      </Aside>
    </Article>
  )
}

export default ProtocolosSectionContent

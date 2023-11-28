import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import CssBaseline from "@material-ui/core/CssBaseline"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import { theme, useStyles } from "../config/materialUiTheme2"
import loadable from "@loadable/component"
import Header from "./header"
import SectionLoadingFallback from "./sectionLoadingFallback"
import getBanners from "./banner/getBanners"

const Banner = loadable(() => import("./banner/index"), {
  fallback: <SectionLoadingFallback height="350px" />,
})
const BannerHorarioAtendimento = loadable(
  () => import("../pagesContent/bannerHorarioAtendimento"),
  { fallback: <SectionLoadingFallback height="350px" /> }
)
const BannerSolicitaCertidao = loadable(
  () => import("../pagesContent/bannerSolicitaCertidao"),
  { fallback: <SectionLoadingFallback height="350px" /> }
)

const Footer = loadable(() => import("./footer2"), {
  fallback: <SectionLoadingFallback />,
})
const BackToTopButton = loadable(() => import("./backToTopButton2"), {
  fallback: <SectionLoadingFallback height="0" />,
})

const Layout = props => {
  const classes = useStyles(props)
  const topElementId = "home"
  const [banners, setBanners] = useState(null)
  Banner.preload()
  BannerHorarioAtendimento.preload()

  useEffect(() => {
    async function _getBanners() {
      if (!Array.isArray(banners)) {
        const _banners = await getBanners()
        setBanners(_banners)
      }
    }
    _getBanners()
  }, [banners, setBanners])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header id={topElementId} />
      <Banner onlineBanners={banners}>
        <BannerHorarioAtendimento />
        <BannerSolicitaCertidao />
      </Banner>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        className={classes.root}
      >
        {props.children}
      </Grid>
      <Footer />
      <BackToTopButton href={topElementId} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

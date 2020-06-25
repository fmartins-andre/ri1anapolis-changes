import React from "react"
import { Grid, makeStyles } from "@material-ui/core"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
  article: {
    margin: 0,
    padding: 0,
    width: "100vw",
    color: "#555555",
    textAlign: "justify",
    "& div, aside, section": {
      scrollbarWidth: "thin",
      "&::-webkit-scrollbar": {
        width: "4px",
        height: "4px",
        backgroundColor: "#F5F5F5",
        overflowX: "auto",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: "10px",
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,.3)",
        backgroundColor: "#f0f0f0",
        overflowX: "auto",
      },
    },
  },
  articleWrapper: {
    maxWidth: "1260px",
    margin: "20px auto",
    padding: "10px 20px",
  },
  section: {
    width: "auto",
    padding: "1vw",
  },
  aside: {
    padding: "1vw",
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    overflowX: "hidden",
  },
  backgroundDefault: {
    background:
      "linear-gradient(45deg, rgba(55,66,62,1) 0%, rgba(86,88,74,1) 50%, rgba(55,66,62,1) 100%)",
    backgroundSize: "cover",
    color: "#fff",
  },
}))

const Section = props => {
  const classes = useStyles()
  return (
    <Grid
      component="section"
      item
      xs={props.xs || 12}
      sm={props.sm || 10}
      md={props.md || 7}
      {...props}
      className={classes.section}
    >
      {props.children}
    </Grid>
  )
}

const Aside = props => {
  const classes = useStyles()
  return (
    <Grid
      component="aside"
      item
      {...props}
      className={classes.aside}
      xs={props.xs || 12}
      sm={props.sm || 10}
      md={props.md || 5}
    >
      {props.children}
    </Grid>
  )
}

const ArticleWrapper = props => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="row"
      justify="center"
      className={classes.articleWrapper}
    >
      {props.children}
    </Grid>
  )
}

const Article = props => {
  const classes = useStyles()

  return (
    <Grid
      item
      className={clsx(
        classes.article,
        props.background && classes.backgroundDefault
      )}
      {...props}
    >
      <ArticleWrapper>{props.children}</ArticleWrapper>
    </Grid>
  )
}

export default Article
export { Article, Section, Aside }

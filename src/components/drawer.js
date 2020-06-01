import React from "react"
import { Drawer } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  scroller: {
    "& > div": {
      overflowX: "hidden",
      scrollbarWidth: "thin",
    },
  },
  content: {
    width: "350px",
    height: "100%",
    padding: "20px 10px",
    background: "#f3f3f3",
  },
}))

const DrawerComponent = props => {
  const classes = useStyles({ ...props })
  return (
    <Drawer {...props} className={classes.scroller}>
      <div className={classes.content}>{props.children}</div>
    </Drawer>
  )
}

export default DrawerComponent

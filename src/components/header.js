import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "10px",
    marginTop: "0px",
  },
  title: {
    textAlign: "center",
    width: "95%",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" align="center" className={classes.title}>
            Testimonial App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

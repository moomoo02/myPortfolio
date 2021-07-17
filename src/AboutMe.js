import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
    vector4:{
      position: "absolute",
      width: "1440px",
      height: "648px",
      left: "7px",
      top: "643px",
      background: "linear-gradient(92.67deg, #985AE7 -2.21%, #BE98EE 103.74%)"
    },
    vector5: {
      position: "absolute",
      width: "1440px",
      height: "648px",
      left: "1447px",
      top: "3909px",
      background: "linear-gradient(92.67deg, #985AE7 -2.21%, #BE98EE 103.74%)",
      transform: "rotate(-180deg)"
    },
    vector4: {
      position: "absolute",
      width: "1440px",
      height: "648px",
      left: "7px",
      top: "643px",
      background: "linear-gradient(92.67deg, #985AE7 -2.21%, #BE98EE 103.74%)"
    }
});
function AboutMe() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.vector4}></div>
            <div className={classes.vector5}></div>
            <div className={classes.vector3}></div>
        </div>
    )
}

export default AboutMe

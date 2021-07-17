import logo from "./logo.svg";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import AboutMe from "./AboutMe";

const theme = createTheme({
  palette: {
    primary: {
      main: "#985AE7",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },

  typography: {
    position: "absolute",
    width: "880px",
    height: "143px",
    left: "166px",
    top: "156px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "64px",
    lineHeight: "78px",
    letterSpacing: "0.01em",
    color: "#000000",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
});
const useStyles = makeStyles({
  navButton: {
    flexDirection: "row",
    alignItems: "flex-start",
    height: "52.5px",
    padding: "15.527px 19.2239px",
  },
  navText: {
    fontFamily: "Montserrat",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "22px",
    letterSpacing: "0.01em",
    textAlign: "center",
    color: "#6B6B6B",
    fullWidth: true,
  },
  title: {
    width: "880px",
    height: "143px",
    left: "159px",
    top: "153px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "64px",
    lineHeight: "78px",
    letterSpacing: "0.01em",
    color: "#000000",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
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

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={5}
        >
          <Grid item xs={0} sm={9} />
          <Grid item xs={12} sm={3}>
            <div style={{ flexDirection: "row" }}>
              <Button className={classes.navButton}>
                <Typography className={classes.navText}>About Me</Typography>
              </Button>
              <Button className={classes.navButton}>
                <Typography className={classes.navText}>Projects</Typography>
              </Button>
              <Button className={classes.navButton}>
                <Typography className={classes.navText}>Contact Me</Typography>
              </Button>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.title}>
              Hello! My name is Kevin and I smell.
            </Typography>
          </Grid>
          {/*<AboutMe/>*/}
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;

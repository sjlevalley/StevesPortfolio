import React from "react";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../avatar.png";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typed from "react-typed";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: theme.spacing(15),
    margin: theme.spacing(1),
    width: theme.spacing(15),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    left: "50%",
    position: "absolute",
    top: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    width: "100vw",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Steve LeValley" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed
          strings={["Steve LeValley"]}
          typeSpeed={25}
          backSpeed={200}
          backDelay={6000}
          loop
        />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["Full Stack Developer"]}
          typeSpeed={40}
          backSpeed={100}
          backDelay={3000}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Email, LinkedIn, GitHub } from "@material-ui/icons";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction
        icon={
          <a
            href="https://github.com/sjlevalley"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
        }
        className={classes.root}
      ></BottomNavigationAction>
      {/* <BottomNavigationAction icon={<Email />} className={classes.root} /> */}
    </BottomNavigation>
  );
};
export default Footer;

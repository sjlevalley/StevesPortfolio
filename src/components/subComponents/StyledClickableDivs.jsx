import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    width: "175px",
    transition: "all 0.2s",
    "&:hover": {
      transform: "scale(1.02)",
    },
    "&:active": {
      transform: "scale(0.98)",
    },
  },
}));

export const StyledClickableNavDiv = ({ children, onClick }) => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.container} onClick={onClick}>
      {children}
    </Box>
  );
};

const useMenuDivStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    width: "175px",
    transition: "all 0.2s",
    "&:hover": {
      color: "tomato",
      transform: "scale(1.02)",
    },
    "&:active": {
      transform: "scale(0.98)",
    },
  },
}));

export const StyledClickableMenuDiv = ({ children, onClick }) => {
  const classes = useMenuDivStyles();
  return (
    <Box component="div" className={classes.container} onClick={onClick}>
      {children}
    </Box>
  );
};

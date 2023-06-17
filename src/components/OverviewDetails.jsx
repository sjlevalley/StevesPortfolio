import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { AboutMe, Certifications, Courses, Skills } from "../helperComponents";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: "flex",
    height: "90vh",
  },
  typedContainer: {
    margin: "2rem 0 0 2.5rem",
    padding: "0 2rem 0 0",
    width: "50%",
    zIndex: 1,
  },
}));

const OverviewDetails = () => {
  const classes = useStyles();

  return (
    <Box className={classes.pageContainer}>
      <Box className={classes.typedContainer}>
        <AboutMe />
        <Skills />
      </Box>
      <Box className={classes.typedContainer}>
        <Certifications />
        <Courses />
      </Box>
    </Box>
  );
};

export default OverviewDetails;

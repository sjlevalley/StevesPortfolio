import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    margin: "o auto",
    padding: "1rem",
    position: "relative",
    "&:before": {
      border: "1px solid tan",
      content: "''",
      height: "100%",
      position: "absolute",
      right: "40px",
      top: 0,
    },
    "&:after": {
      clear: "both",
      content: "''",
      display: "table",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    clear: "both",
    margin: "1rem 1rem 1rem 1rem",
    padding: "1rem",
    position: "relative",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      borderColor: "tomato tomato transparent transparent",
      borderStyle: "solid",
      borderWidth: "0.625rem",
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      margin: "1rem",
      width: "44%",
      "&:nth-of-type(2n)": {
        borderColor: "tan",
        float: "right",
        margin: "1rem",
      },
      "&:nth-of-type(2n):before": {
        borderColor: "transparent transparent tomato tomato",
        left: "-0.625rem",
        right: "auto",
      },
    },
  },
  timeLineYear: {
    background: "tomato",
    borderRadius: "2px",
    color: "#fff",
    fontSize: "1.2rem",
    lineHeight: 1,
    margin: "0 3rem 0 auto",
    maxWidth: "10rem",
    padding: "0.5rem 1rem",
    textAlign: "center",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      margin: "0 auto",
      textAlign: "center",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "1rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Work Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Marine Engineer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Government / Private Sector
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            My prior career was as a Merchant Mariner, where I served onboard
            both Government and Private sector ships as a U.S.C.G. Licensed
            Marine Engineer. In this career, I dealt a lot with all aspects of
            engineering machinery as it pertains to operating and maintaining
            ships. These include, but are not limited to Mechanical, Electrical,
            Electronic, and Automation systems.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          October 2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Software Engineer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            iSpot.tv
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            At iSpot.tv, I work as a Software Engineer as part of a Software
            Engineering team that is involved with many different projects,
            which incorporate many different technologies. These technologies
            include JavaScript, Node.js, React.js, Python, Postgres, Redis.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Present
        </Typography>
      </Box>
    </Box>
  );
};

export default Resume;

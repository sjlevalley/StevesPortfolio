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
    borderRadius: '2px',
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
            ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
            Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
            repudiandae, rerum necessitatibus nisi mollitia.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
            ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
            Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
            repudiandae, rerum necessitatibus nisi mollitia.
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

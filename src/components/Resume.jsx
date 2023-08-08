import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "transparent",
    margin: "0% 15%",
  },
  timeLine: {
    position: "relative",
    "&:before": {
      border: "1px solid tan",
      content: "''",
      height: "100%",
      position: "absolute",
    },
    [theme.breakpoints.up("md")]: {
      padding: "1rem",
      "&:before": {},
    },
  },
  timeLineItem: {
    clear: "both",
    padding: "1rem",
    position: "relative",
    "&:after": {},
  },
  timeLineYear: {
    background: "tomato",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "18px",
    lineHeight: 1,
    margin: "1rem 1rem",
    maxWidth: "10rem",
    padding: "10px",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      "&:nth-of-type(2n)": {
        float: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "1rem 2rem",
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
      <Typography variant="h4" align="left" className={classes.heading}>
        Work Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Box component="div" className={classes.timeLineItem}>
          <Typography variant="h5" align="left" className={classes.subHeading}>
            Marine Engineer
          </Typography>
          <Typography variant="body1" align="left" className={classes.body1}>
            Government / Private Sector
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            My prior career was as a Merchant Mariner, where I served onboard
            both Government and Private sector ships as a U.S.C.G. Licensed
            Marine Engineer. In this career, I dealt with all aspects of
            operating and maintaining engineering machinery onboard ships. These
            included, but were not limited to, Mechanical, Electrical,
            Electronic, and Automation systems.
          </Typography>
        </Box>
        <Typography variant="h2" className={`${classes.timeLineYear}`}>
          July 2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography variant="h5" align="left" className={classes.subHeading}>
            Software Engineering Intern
          </Typography>
          <Typography variant="body1" align="left" className={classes.body1}>
            Known Point Technologies
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            Highly motivated software engineering intern with hands-on
            experience in developing web applications using React.js, Python,
            and integrating databases like PostgreSQL and Redis. Proficient in
            deploying applications on Amazon Web Services (AWS) cloud platform.
            Proven ability to work collaboratively in a team and deliver
            high-quality code under tight deadlines.
          </Typography>
        </Box>
        <Typography variant="h2" className={`${classes.timeLineYear}`}>
          October 2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography variant="h5" align="left" className={classes.subHeading}>
            Software Engineer
          </Typography>
          <Typography variant="body1" align="left" className={classes.body1}>
            iSpot.tv
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            At iSpot.tv, I was a Software Engineer as part of a Software
            Engineering team that was responsible for many different projects
            that incorporated a wide range of technologies. These technologies
            include, but are not limited to JavaScript, Node.js, React.js,
            Python, Postgres, Redis, and AWS. During my time at iSpot, my main
            focus was completely rebuilding and upgrading an existing internal
            legacy application from using the latest technologies.
          </Typography>
        </Box>
        <Typography variant="h2" className={`${classes.timeLineYear}`}>
          December 2022
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography variant="h5" align="left" className={classes.subHeading}>
            Field Engineer / Software Engineer
          </Typography>
          <Typography variant="body1" align="left" className={classes.body1}>
            Strategic Maintenance Solutions, Inc.
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            As a Field Engineer, I was involved in the technical implementation
            and installation of proprietary equipment dealing with Vibration
            Analysis and the Condition Monitoring at industrial manufacturing
            plants of many well-known companies throughout the United States. As
            a Software Engineer, I developed methods and wrote programs using
            Python to automate many of the tasks which were previously being
            done by hand, saving valuable time and money, greatly improved
            efficiency, and allowed for deliverables to be completed in a much
            more timely manner.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;

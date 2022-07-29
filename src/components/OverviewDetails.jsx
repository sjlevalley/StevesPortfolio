import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: theme.spacing(15),
    margin: theme.spacing(1),
    width: theme.spacing(15),
  },
  pageContainer: {
    display: "flex",
    height: "90vh",
  },
  skillsBox: {
    margin: "0 1rem 0 0",
    width: "fit-content",
  },
  title: {
    color: "tomato",
  },
  text: {
    color: "tan",
    fontSize: "14px",
    textTransform: "uppercase",
  },
  typedContainer: {
    margin: "2rem 0 0 2.5rem",
    padding: "0 2rem 0 0",
    width: "50%",
    zIndex: 1,
  },
}));

const aboutMeTextp1 =
  "I am a Highly driven, hardworking, self-starting Full-Stack Web Developer willing to put in the extra time and effort to ensure a high-quality outcome. I received a certificate in Full-Stack Web Development from the University of California, San Diego, and a prior B.S. in Marine Engineering from the California Maritime Academy. Being a team member is integral to who I am as a person, but I am also able to work alone without any oversight, whenever needed.";

const aboutMeTextp2 =
  "These qualities are clearly demonstrated in my personal, educational, and career backgrounds as I have received awards, recommendations, and positive evaluations for my efforts in each of these parts of my life. Hard-work, and being quality-driven have been instilled in my ethos as a team member. I readily apply these traits, as well as my ever-improving Web-Development in a fast-paced, quality-driven environment.";

const skills = [
  "- JavaScript",
  "- React.js/Redux",
  "- Redux Saga/Redux Toolkit",
  "- Next.js (SSR)",
  "- Python",
  "- SQL/NoSQL",
  "- PostgreSQL",
  "- Firebase",
  "- Node",
  "- Express",
  "- Flask",
  "- MongoDB",
  "- AWS",
  "- Redis",
  "- Docker",
  "- React Testing Library",
  "- Playwright",
  "- Test Driven Development",
  "- Jira",
  "- Git/GitHub",
];

const Header = () => {
  const classes = useStyles();

  const skillsDataLeft = [];
  const skillsDataMiddle = [];
  const skillsDataRight = [];
  skills.forEach((s, index) => {
    if (index % 3 === 2) {
      skillsDataRight.push(
        <Typography className={classes.text} variant="h6">
          {s}
        </Typography>
      );
    } else if (index % 3 === 1) {
      skillsDataMiddle.push(
        <Typography className={classes.text} variant="h6">
          {s}
        </Typography>
      );
    } else {
      skillsDataLeft.push(
        <Typography className={classes.text} variant="h6">
          {s}
        </Typography>
      );
    }
  });

  return (
    <Box className={classes.pageContainer}>
      <Box className={classes.typedContainer}>
        <Typography className={classes.title} variant="h6">
          About Me:
        </Typography>
        <Typography className={classes.text} variant="h6">
          {aboutMeTextp1}
        </Typography>
        <br />
        <Typography className={classes.text} variant="h6">
          {aboutMeTextp2}
        </Typography>
        <br />
        <Typography className={classes.title} variant="h6">
          I have experience with the following technologies/skills:
        </Typography>
        <br />
        <Box style={{ display: "flex" }}>
          <Box className={classes.skillsBox}>{skillsDataLeft}</Box>
          <Box className={classes.skillsBox}>{skillsDataMiddle}</Box>
          <Box className={classes.skillsBox}>{skillsDataRight}</Box>
        </Box>
      </Box>
      <Box className={classes.typedContainer}>
        <Typography className={classes.title} variant="h6">
          Certifications / Continued Education:
        </Typography>

        <Typography className={classes.text} variant="h6">
          In order to stay up to date and continue to improve my skills, I use
          YouTube, Udemy, and FreeCodeCamp.org as resources to improve my
          skills. Below is a list of In Progress, Recently Completed, and
          Upcoming training I plan to do.
        </Typography>
        <br />
        <Typography className={classes.title} variant="h6">
          In Progress:
        </Typography>
        <Typography className={classes.text} variant="h6">
          - Udemy - Understanding TypeScript - 2022 Edition - (15 Hours)
        </Typography>
        <br />
        <Typography className={classes.title} variant="h6">
          Recently Completed:
        </Typography>
        <Typography className={classes.text} variant="h6">
          - AWS Certification - AWS Certified Cloud Practitioner
        </Typography>
        <Typography className={classes.text} variant="h6">
          - Udemy - AWS Certified Cloud Practitioner
        </Typography>
        <Typography className={classes.text} variant="h6">
          - Udemy - Automated Software Testing with Playwright
        </Typography>
        <Typography className={classes.text} variant="h6">
          - Udemy - Next.js - The Complete Guide - (25 hrs)
        </Typography>
        <Typography className={classes.text} variant="h6">
          - Udemy - React - The Complete Guide (48.5 hrs)
        </Typography>
        <Typography className={classes.text} variant="h6">
          - Udemy - The Complete Python/PostgreSQL Course 2.0 (13.5 hrs)
        </Typography>
        <Typography className={classes.text} variant="h6">
          - Udemy - REST APIs with Flask and Python (17 hrs)
        </Typography>
        <Typography className={classes.text} variant="h6">
          - Udemy - Learn Python Programming Masterclass (65 hrs)
        </Typography>
        <Typography className={classes.text} variant="h6">
          - Udemy - React, React Redux and Redux Saga (7 hrs)
        </Typography>
        <br />
      </Box>
    </Box>
  );
};

export default Header;

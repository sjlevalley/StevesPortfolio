import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { aboutMeTextp1, aboutMeTextp2, completedCourses, skills, currentCourse } from "./constants";
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

export const Courses = () => {
    const classes = useStyles();

    const courses = completedCourses.map((c) => (
        <Typography className={classes.text} variant="h6">
            - {c}
        </Typography>
    ))

    return (
        <>
            <Typography className={classes.title} variant="h6">
                In Progress:
            </Typography>
            <Typography className={classes.text} variant="h6">
                {currentCourse}
            </Typography>
            <br />
            <Typography className={classes.title} variant="h6">
                Recently Completed:
            </Typography>
            {courses}
        </>
    )
}


export const Skills = () => {
    const classes = useStyles();


    const skillsDataLeft = [];
    const skillsDataMiddle = [];
    const skillsDataRight = [];
    skills.sort().forEach((s, index) => {
        if (index <= 6) {
            skillsDataLeft.push(
                <Typography className={classes.text} variant="h6">
                    {s}
                </Typography>
            );
        } else if (index > 6 && index <= 13) {
            skillsDataMiddle.push(
                <Typography className={classes.text} variant="h6">
                    {s}
                </Typography>
            );
        } else {
            skillsDataRight.push(
                <Typography className={classes.text} variant="h6">
                    {s}
                </Typography>
            );
        }
    });
    return (
        <>
            <Typography className={classes.title} variant="h6">
                I have experience with the following technologies/skills:
            </Typography>
            <Box style={{ display: "flex" }}>
                <br />
                <Box className={classes.skillsBox}>{skillsDataLeft}</Box>
                <Box className={classes.skillsBox}>{skillsDataMiddle}</Box>
                <Box className={classes.skillsBox}>{skillsDataRight}</Box>
            </Box>
        </>

    )
}

export const AboutMe = () => {
    const classes = useStyles();

    return (
        <>
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
        </>

    )
}


export const Certifications = () => {
    const classes = useStyles();
    return (
        <>
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
        </>
    )
}

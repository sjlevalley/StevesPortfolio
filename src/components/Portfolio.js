import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import EchoScreenshot from '../images/portfolioScreenshots/EchoScreenshot.png'
import TodoistScreenshot from '../images/portfolioScreenshots/TodoistScreenshot.png'
import StevesFineDining from '../images/portfolioScreenshots/StevesFineDining.png'
import AmazonCloneScreenshot from '../images/portfolioScreenshots/AmazonCloneScreenshot.png'
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    height: 350,
    margin: "3rem auto",
  },
  content: {
    height: '170px'
  }
}));

const echo = 'https://echo-726ac.firebaseapp.com/signup'
const todoist = 'https://todoist-2db6b.web.app/'
const fineDining = 'https://sjlevalley.github.io/StevesFineDining/'
const amazonClone = 'https://clone-c04a7.web.app/'

const projects = [
  {
    name: "Echo - A Social Media App",
    description: `This site combines React, Redux, and Firebase to create a fully functional social media app roughly based on Twitter's functionality. `,
    image: EchoScreenshot,
    link: echo
  },
  {
    name: "Todoist Clone",
    description: 'This is a task organization app based off of the Todoist website. The technologies used in this site include React with Redux Toolkit for state management, Firebase, and incorporates the Material UI Framework for the design.',
    image: TodoistScreenshot,
    link: todoist
  },
  {
    name: "Steve's Fine Dining",
    description: `Delicious Food, Fresh out of the oven! This app is a basic food ordering app with a shopping cart. It was created with React, React Context for state management.`,
    image: StevesFineDining,
    link: fineDining
  },
  {
    name: "Amazon Clone",
    description: `This is a clone of the Amazon.com website, that incorporates React and Stripe to allow users to make real payments`,
    image: AmazonCloneScreenshot,
    link: amazonClone
  },
  {
    name: "Project 5",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quis\
  consequatur magni quod nesciunt necessitatibus molestiae non\
  eligendi, magnam est aliquam recusandae ? Magnam soluta minus\
  iste alias sunt veritatis nisi dolores!`,
    image: project5,
    link: echo
  },
  {
    name: "Project 6",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quis\
  consequatur magni quod nesciunt necessitatibus molestiae non\
  eligendi, magnam est aliquam recusandae ? Magnam soluta minus\
  iste alias sunt veritatis nisi dolores!`,
    image: project6,
    link: echo
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={project.name}
                  height="140"
                  image={project.image}
                />
                <CardContent className={classes.content}>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/* <Button size="small" color="primary">
                  Share
                </Button> */}
                <Button size="small" color="primary">
                  <a href={project.link} target='_blank' rel="noopener noreferrer">View Live Site</a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;

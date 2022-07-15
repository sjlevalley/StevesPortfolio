import React from "react";
import cssIcon from '../images/cssIcon.svg'
import dockerIcon from '../images/dockerIcon.svg'
import githubIcon from '../images/githubIcon.svg'
import htmlIcon from '../images/htmlIcon.svg'
import javascriptIcon from '../images/javascriptIcon.svg'
import nodeIcon from '../images/nodeIcon.svg'
import postgresIcon from '../images/postgresIcon.svg'
import pythonIcon from '../images/pythonIcon.svg'
import reactIcon from '../images/reactIcon.svg'
import { Particles as ReactParticles } from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  particlesCanvas: {
    opacity: "0.5",
    position: "fixed",
  },
}));

const Particles = () => {
  const classes = useStyles();

  return (
    <ReactParticles
      canvasClassName={classes.particlesCanvas}
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900,
            },
          },
          shape: {
            type: ["circle", "image"],
            image: [
              {
                src: cssIcon,
                height: 40,
                width: 40
              },
              {
                src: dockerIcon,
                height: 40,
                width: 40
              },
              {
                src: githubIcon,
                height: 40,
                width: 40
              },
              {
                src: htmlIcon,
                height: 40,
                width: 40
              },
              {
                src: javascriptIcon,
                height: 40,
                width: 40
              },
              {
                src: nodeIcon,
                height: 40,
                width: 40
              },
              {
                src: reactIcon,
                height: 40,
                width: 40
              },
              {
                src: postgresIcon,
                height: 40,
                width: 40
              },
              {
                src: pythonIcon,
                height: 40,
                width: 40
              }
            ],
            stroke: {
              width: 10,
              color: "tomato",
            },
          },
          size: {
            value: 20,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              size_min: 0,
              sync: true,
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.5,
              sync: false,
            },
          },
        },
      }}
    />
  );
};

export default Particles;

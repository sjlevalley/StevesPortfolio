import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Particles as ReactParticles } from "react-particles-js";

const useStyles = makeStyles((theme) => ({
  particlesCanvas: {
    position: "fixed",
    opacity: "0.3",
  },
}));

const ImageParticles = () => {
  const classes = useStyles();

  return (
    <ReactParticles
      canvasClassName={classes.particlesCanvas}
      params={{
        particles: {
          number: {
            value: 8,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            speed: 1,
            out_mode: "out",
          },
          shape: {
            type: ["image", "circle"],
            image: [
              {
                src: "/react.cd2ab268.svg",
                height: 20,
                width: 23,
              },
              {
                src: "/k8s.2d579d24.svg",
                height: 20,
                width: 20,
              },
              {
                src: "/code.b3b4c4f4.png",
                height: 20,
                width: 20,
              },
            ],
          },
          color: {
            value: "#CCC",
          },
          size: {
            value: 30,
            random: false,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false,
            },
          },
        },
        retina_detect: false,
      }}
    />
  );
};

export default ImageParticles;

import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Particles from "./Particles.jsx";

const Home = () => {
  const [displayed, setDisplayed] = useState(false)

  useEffect(() => {
    setDisplayed(true)
  }, [])

  return (
    <>
      {displayed && (
        <>
          <Header />
          <Particles />
        </>
      )}
    </>
  );
};

export default Home;

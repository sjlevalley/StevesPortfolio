import React, { useEffect, useState } from "react";
import OverviewDetails from "./OverviewDetails";
import Particles from "./Particles.jsx";

const Overview = () => {
  const [displayed, setDisplayed] = useState(false);

  useEffect(() => {
    setDisplayed(true);
  }, []);

  return (
    <>
      {displayed && (
        <>
          <OverviewDetails />
          <Particles />
        </>
      )}
    </>
  );
};

export default Overview;

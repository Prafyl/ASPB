import React from "react";

import Analysis from "../components/Analyse/Analysis.js";
import Navbar from "../components/Utils/Navbar";

const analysis = () => {
  return (
    <>
      <Navbar
        about={false}
        dashboard={false}
        leaderboard={false}
        analysis={true}
      />
      <Analysis />;
    </>
  );
};

export default analysis;

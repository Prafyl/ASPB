import React from "react";

import Navbar from "../components/Utils/Navbar";
import AboutUs from "../components/AboutUs/AboutUs";

const about = () => {
  return (
    <>
      <Navbar
        about={true}
        dashboard={false}
        leaderboard={false}
        analysis={false}
      />
      <AboutUs />
    </>
  );
};

export default about;

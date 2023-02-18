import React from "react";

import Navbar from "../components/Utils/Navbar";
import LeaderBoard from "../components/Dashboard/Leaderboard/LeaderBoard";

const leaderboard = () => {
  return (
    <>
      <Navbar
        about={false}
        dashboard={false}
        leaderboard={true}
        analysis={false}
      />
      <LeaderBoard className="mt-36" />;
    </>
  );
};

export default leaderboard;

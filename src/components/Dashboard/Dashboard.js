import React from "react";
import Main from "./Main";
import LeaderBoard from "./Leaderboard/LeaderBoard";
import Dictionary from "./Dictionary/Dictionary";
import ToDo from "./ToDo";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className=" mt-20  flex-grow flex flex-col  w-3/12">
        <Dictionary />
        <LeaderBoard />
      </div>
      <div className="flex-grow flex flex-col w-6/12">
        <Main />
      </div>
      <div className="mt-20 flex-grow flex-col flex w-3/12">
        <ToDo />
      </div>
    </div>
  );
};

export default Dashboard;

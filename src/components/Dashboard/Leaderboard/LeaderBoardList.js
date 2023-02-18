import React from "react";

import LeaderBoardListItem from "../Leaderboard/LeaderBoardListItem";

const LeaderBoardList = (props) => {
  return (
    <div className="flow-root">
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        <LeaderBoardListItem leaderBoardData={props.leaderBoardData} />
      </ul>
    </div>
  );
};

export default LeaderBoardList;

import React, { useState, useEffect } from "react";

import LeaderBoardList from "../Leaderboard/LeaderBoardList";

const LeaderBoard = (props) => {
  const [leaderBoardData, setLeaderBoardData] = useState([]);
  async function getLeaderboard(file) {
    const result = await fetch(file);
    const data = await result.json();
    const arrayOfkeys = Object.keys(data);
    const newArray = arrayOfkeys.map((i) => {
      return data[i];
    });
    newArray.sort(function (a, b) {
      return b.score - a.score;
    });

    setLeaderBoardData(newArray);
  }
  useEffect(() => {
    getLeaderboard(
      "https://test1-6e146-default-rtdb.asia-southeast1.firebasedatabase.app/store/main.json"
    );
  }, []);

  return (
    <div
      className={
        props.className +
        " mt-4  w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      }
    >
      <div classname="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          LeaderBoards
        </h5>
      </div>
      <LeaderBoardList leaderBoardData={leaderBoardData} />
    </div>
  );
};

export default LeaderBoard;

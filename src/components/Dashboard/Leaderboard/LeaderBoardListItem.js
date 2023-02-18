import React from "react";

const LeaderBoardListItem = ({ leaderBoardData }) => {
  const listItem = leaderBoardData.map((e) => {
    return (
      <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0"></div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {e.name}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {e.type}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {e.score * 10}/100
          </div>
        </div>
      </li>
    );
  });
  return listItem;
};

export default LeaderBoardListItem;

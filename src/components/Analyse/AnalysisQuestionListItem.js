import React, { useState } from "react";

import CorrectSVG from "../Utils/CorrectSVG";
import IncorrectSVG from "../Utils/IncorrectSVG";

const AnalysisQuestionListItem = (props) => {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0"></div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {props.question}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            <ul>
              <li>A: {props.options[0]}</li>
              <li>B: {props.options[1]}</li>
              <li>C: {props.options[2]}</li>
              <li>D: {props.options[3]}</li>
            </ul>
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {props.choice == props.answer && <CorrectSVG />}
          {props.choice !== props.answer && <IncorrectSVG />}
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"></div>
      </div>
    </li>
  );
};

export default AnalysisQuestionListItem;

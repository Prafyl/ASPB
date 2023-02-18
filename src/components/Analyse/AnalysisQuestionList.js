import React, { useContext } from "react";

import AnalysisQuestionListItem from "./AnalysisQuestionListItem";
import AuthContext from "../../store/analysis-context";

const ARRAYOFNUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const AnalysisQuestionList = () => {
  const ctx = useContext(AuthContext);

  const listItem = ARRAYOFNUMBERS.map((e) => {
    if (ctx.result[e]) {
      return (
        <AnalysisQuestionListItem
          key={ctx.result[e].no}
          question={ctx.result[e].question}
          options={ctx.result[e].options}
          answer={ctx.result[e].answer}
          choice={ctx.result[e].choice}
        />
      );
    } else {
      return <p>Nothing to analyse yet!</p>;
    }
  });

  return (
    <>
      <div class="flex items-center justify-between mb-4"></div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {listItem}
        </ul>
      </div>
    </>
  );
};

export default AnalysisQuestionList;

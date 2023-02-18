import { useReducer, useState } from "react";
import AnalysisContext from "./analysis-context";

const ARRAYOFNUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const defaultAnalysisState = {
  result: {
    1: {
      question: "",
      options: [],
      no: 0,
      choice: "",
      isCorect: false,
      type: "",
      answer: "",
    },
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
    10: {},
  },
  totalScore: 0,
};

const analysisReducer = (state, action) => {
  if (action.type == "ADD") {
    let newState = state;
    let score = 0;
    ARRAYOFNUMBERS.map((e) => {
      if (state.result[e].isCorrect) {
        score += 1;
      }
    });
    newState.result[action.item.no] = action.item;
    newState.totalScore = score;

    console.log("CTx");
    console.log(newState);
    return newState;
  }
  if (action.type === "REMOVE") {
    return defaultAnalysisState;
  }
  return defaultAnalysisState;
};

const AnalysisProvider = (props) => {
  const [analysisState, dispatchAnalysisAction] = useReducer(
    analysisReducer,
    defaultAnalysisState
  );

  const analysisContext = {
    result: analysisState.result,
    totalScore: analysisState.totalScore,
    addQuestion: (item) => {
      dispatchAnalysisAction({ type: "ADD", item: item });
    },
    reset: () => {
      dispatchAnalysisAction({ type: "REMOVE" });
    },
  };

  return (
    <AnalysisContext.Provider value={analysisContext}>
      {props.children}
    </AnalysisContext.Provider>
  );
};

export default AnalysisProvider;

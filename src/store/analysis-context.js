import React from "react";

const AnalysisContext = React.createContext({
  result: {
    1: {},
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
  addQuestion: () => {},
  reset: (id) => {},
});

export default AnalysisContext;

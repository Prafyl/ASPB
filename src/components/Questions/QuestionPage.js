import React, { useState, useEffect } from "react";

import Question from "./Question";
import Options from "./Options";

const question = (props) => {
  const [questionData, setQuestionData] = useState({});

  async function getAnswer(file) {
    const result = await fetch(file);
    const data = await result.json();
    setQuestionData(data || questionData);
  }

  useEffect(() => {
    getAnswer(
      `https://test1-6e146-default-rtdb.asia-southeast1.firebasedatabase.app/${props.type}/${props.no}.json`
    );
  }, [props]);
  return (
    <>
      <Question
        question={questionData.question}
        no={props.no}
        type={props.type}
      />
      <Options
        no={props.no}
        type={props.type}
        question={questionData.question}
        a={questionData.A}
        b={questionData.B}
        c={questionData.C}
        d={questionData.D}
        answer={questionData.answer}
      />
    </>
  );
};

export default question;

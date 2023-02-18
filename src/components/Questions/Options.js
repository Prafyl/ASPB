import React, { useContext, useRef, useEffect } from "react";
import { useRouter } from "next/router";

import NextButton from "./NextButton";

import analysisContext from "../../store/analysis-context";

const Options = ({ a, b, c, d, answer, question, no, type }) => {
  const divRef = useRef();
  if (divRef.current) {
    divRef.current.focus();
  }

  const ctx = useContext(analysisContext);

  const questionData = {
    question,
    options: [a, b, c, d],
    answer,
    no,
    type,
  };

  const router = useRouter();
  let nextPage = `/questions/${type}/${+no + 1}`;
  if (no == 10) {
    nextPage = `/analysis`;
  }

  const clickHandler = (opt) => {
    console.log("clicked");
    console.log("set choice to " + opt);
    if (opt == answer) {
      ctx.addQuestion({ ...questionData, choice: opt, isCorrect: true });
    }
    if (opt !== answer) {
      ctx.addQuestion({ ...questionData, choice: opt, isCorrect: false });
    }
    setTimeout(() => {
      router.push(nextPage);
    }, 500);
  };

  return (
    <div>
      <div tabIndex={0} ref={divRef} className="flex justify-center ">
        <div className="mb-12 grid grid-cols-2 mt-10 bg-slate-800 p-2 pt-3 text-center rounded-lg ">
          <button
            onClick={() => {
              clickHandler("A");
            }}
            className="flex flex-col align-items justify-center align-middle p-6 h-48 w-96 m-5 rounded-lg bg-slate-400 text-4xl hover:bg-blue-300 active:bg-blue-400 focus:bg-blue-400"
          >
            <p className=" pb-8 truncate ">A</p>
            <div
              class=" flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow top-5 left-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
              role="alert"
            >
              <div class="text-2xl font-normal">{a}</div>
            </div>
          </button>
          <button
            onClick={() => {
              clickHandler("B");
            }}
            className="flex flex-col align-items justify-center p-6 m-4 mt-5 h-48 rounded-lg bg-slate-400 text-4xl  hover:bg-blue-300 active:bg-blue-400 focus:bg-blue-400"
          >
            <p className="pb-8 truncate">B</p>
            <div
              class=" flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow top-5 left-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
              role="alert"
            >
              <div class="text-2xl font-normal">{b}</div>
            </div>
          </button>
          <button
            onClick={() => {
              clickHandler("C");
            }}
            className="flex flex-col align-items justify-center p-6 m-4 mt-5 h-48 rounded-lg bg-slate-400 text-4xl  hover:bg-blue-300 active:bg-blue-400 focus:bg-blue-400"
          >
            <p className="pb-8 truncate">C</p>
            <div
              class=" flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow top-5 left-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
              role="alert"
            >
              <div class="text-2xl font-normal">{c}</div>
            </div>
          </button>

          <button
            onClick={() => {
              clickHandler("D");
            }}
            className="flex flex-col align-items justify-center p-6 m-4 mt-5 h-48 rounded-lg bg-slate-400 text-4xl  hover:bg-blue-300 active:bg-blue-400 focus:bg-blue-400"
          >
            <p className="pb-8 truncate">D</p>
            <div
              class=" flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow top-5 left-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
              role="alert"
            >
              <div class="text-2xl font-normal">{d}</div>
            </div>
          </button>
        </div>
      </div>
      <NextButton
        no={no}
        type={type}
        question={question}
        a={a}
        b={b}
        c={c}
        d={d}
        answer={answer}
      />
    </div>
  );
};

export default Options;

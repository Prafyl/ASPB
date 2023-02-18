import React, { useContext, useState, useRef } from "react";
import { useRouter } from "next/router";

import AnalysisQuestionList from "./AnalysisQuestionList";

import AuthContext from "../../store/analysis-context";

const Analysis = (prop) => {
  const router = useRouter();
  const ctx = useContext(AuthContext);
  const inputRef = useRef();
  console.log(ctx);

  async function postLeaderboard(file, params) {
    const response = await fetch(file, params);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: inputRef.current.value,
      score: ctx.totalScore,
      type: ctx.result[1].type,
    };
    postLeaderboard(
      `https://test1-6e146-default-rtdb.asia-southeast1.firebasedatabase.app/store/${data.type}.json`,
      {
        method: "POST",
        body: JSON.stringify({
          name: inputRef.current.value,
          score: ctx.totalScore,
          type: ctx.result[1].type,
        }),
      }
    );
    router.push("/");
  };

  return (
    <div className="flex justify-center">
      <div className="mt-24 w-9/12  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div>
          <div className="relative flex">
            <h5 class="mr-40 flex-row mb-3 text-4xl font-bold leading-none text-gray-900 dark:text-white">
              Result Analysis ({ctx.result[1].type})
            </h5>
            <div class="mb-6 ">
              <form onSubmit={submitHandler}>
                <input
                  ref={inputRef}
                  type="text"
                  id="default-input"
                  placeholder="Username"
                  className="ml-96 flex-row float-left bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                <button
                  type="submit"
                  className=" ml-4 flex-row float-right
               text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="relative">
            <h5 class=" text-2xl font-bold leading-none text-gray-900 dark:text-white">
              Total Score: {ctx.totalScore}/10
            </h5>
          </div>
        </div>
        <AnalysisQuestionList />
      </div>
    </div>
  );
};

export default Analysis;

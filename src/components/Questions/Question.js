import React, { useContext } from "react";

import AuthContext from "../../store/analysis-context";

const Question = (props) => {
  return (
    <div className="flex justify-center">
      <div className="mt-24 w-9/12  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div>
          <div className="relative">
            <h5 class="mb-3 text-2xl font-bold leading-none text-gray-900 dark:text-white">
              Question {props.no} ({props.type})
            </h5>
            <div className=" block w-full p-4 pl-10 text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 ">
              {props.question}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;

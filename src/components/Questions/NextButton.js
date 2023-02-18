import { useRouter } from "next/router";

import { useContext } from "react";

import analysisContext from "../../store/analysis-context";

const Next = ({ a, b, c, d, answer, question, no, type }) => {
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
  let previousPage = `/questions/${type}/${+no - 1}`;
  if (no == 1) {
    previousPage = `/questions/${type}/${no}`;
  }

  return (
    <div className="flex justify-center ">
      <button
        type="button"
        onClick={() =>
          setTimeout(() => {
            {
              router.push(previousPage);
            }
          }, 300)
        }
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-3xl px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none w-48 dark:focus:ring-blue-800"
      >
        {"<Back"}
      </button>
      <button
        type="button"
        onClick={() => {
          ctx.addQuestion({ ...questionData, choice: 0, isCorrect: false });
          setTimeout(() => {
            router.push(nextPage);
          }, 300);
        }}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-3xl px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none w-48 dark:focus:ring-blue-800"
      >
        {"Next>"}
      </button>
    </div>
  );
};

export default Next;

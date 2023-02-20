import React, { useState } from "react";
import CorrectSVG from "../Utils/CorrectSVG";
import IncorrectSVG from "../Utils/IncorrectSVG";

const Sidebar = () => {
  const [main, setMain] = useState(true);
  const [physics, setPhysics] = useState(true);
  const [chemistry, setChemistry] = useState(true);
  const [english, setEnglish] = useState(false);
  const [exercise, setExercise] = useState(false);
  const [book, setBook] = useState(true);

  const mainHandler = (e) => {
    setMain((prev) => {
      return !prev;
    });
  };
  const physicsHandler = (e) => {
    setPhysics((prev) => {
      return !prev;
    });
  };

  const chemistryHandler = (e) => {
    setChemistry((prev) => {
      return !prev;
    });
  };

  const englishHandler = (e) => {
    setEnglish((prev) => {
      return !prev;
    });
  };

  const exerciseHandler = (e) => {
    setExercise((prev) => {
      return !prev;
    });
  };

  const bookHandler = (e) => {
    setBook((prev) => {
      return !prev;
    });
  };

  return (
    <div class="mt-4 w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Daily Goal
        </h5>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Main
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  10 Questions
                </p>
              </div>
              <button
                onClick={mainHandler}
                className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                {main && <CorrectSVG />}
                {!main && <IncorrectSVG />}
              </button>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Physics
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  10 Questions
                </p>
              </div>
              <button
                onClick={physicsHandler}
                className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                {physics && <CorrectSVG />}
                {!physics && <IncorrectSVG />}
              </button>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Chemistry{" "}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  10 questions
                </p>
              </div>
              <button
                onClick={chemistryHandler}
                className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                {chemistry && <CorrectSVG />}
                {!chemistry && <IncorrectSVG />}
              </button>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  English
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  10 questions
                </p>
              </div>
              <button
                onClick={englishHandler}
                className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-whi  te"
              >
                {english && <CorrectSVG />}
                {!english && <IncorrectSVG />}
              </button>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Exercise{" "}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  10 pushups 10 pullups
                </p>
              </div>
              <button
                onClick={exerciseHandler}
                className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                {exercise && <CorrectSVG />}
                {!exercise && <IncorrectSVG />}
              </button>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Book
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  10 pages
                </p>
              </div>
              <button
                onClick={bookHandler}
                className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                {book && <CorrectSVG />}
                {!book && <IncorrectSVG />}
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

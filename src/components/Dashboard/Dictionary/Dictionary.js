import React, { useState, useRef } from "react";

import SearchSVG from "../../Utils/SearchSVG";
import DictionaryList from "./DictionaryList";

const Dictionary = () => {
  const word = useRef();
  const [diction, setDiction] = useState([]);

  async function getDiction(file) {
    const result = await fetch(file);
    const data = await result.json();
    if (data[0]) {
      setDiction(data[0].meanings);
    }
  }
  const submitHandler = (e) => {
    e.preventDefault();

    const requestWord = word.current.value;
    getDiction(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${requestWord}`
    );

    word.current.value = "";
  };
  return (
    <div className="mt-4 w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 class="mb-4 text-xl font-bold leading-none text-gray-900 dark:text-white">
        Dictionary
      </h5>
      <div>
        <form onSubmit={submitHandler}>
          <div className="relative">
            <SearchSVG />
            <input
              ref={word}
              type="search"
              id="search"
              className="mb-4 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <DictionaryList displayData={diction} />
        </ul>
      </div>
    </div>
  );
};

export default Dictionary;

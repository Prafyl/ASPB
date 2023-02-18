import React from "react";

const DictionaryList = (props) => {
  const list = props.displayData.map((val) => (
    <li key={Math.random()} className="py-3 sm:py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0"></div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900  dark:text-white">
            {val.definitions[0].definition}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {val.partOfSpeech}
          </p>
        </div>
      </div>
    </li>
  ));

  return (
    <div className="flow-root">
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        {list}
      </ul>
    </div>
  );
};

export default DictionaryList;

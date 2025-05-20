import React from "react";

const Counter = ({ about = {}, classname }) => {
  const defaultData = {
    setup_growth: 555,
    passive_income: 999,
    problem_solving: 888,
    goal_achiever: 666,
  };

  const data = {
    setup_growth: about?.setup_growth ?? defaultData.setup_growth,
    passive_income: about?.passive_income ?? defaultData.passive_income,
    problem_solving: about?.problem_solving ?? defaultData.problem_solving,
    goal_achiever: about?.goal_achiever ?? defaultData.goal_achiever,
  };

  const items = [
    { count: data.setup_growth, label: "Business Setup Growth" },
    { count: data.passive_income, label: "Business Passive Income" },
    { count: data.problem_solving, label: "Business Problem Solving" },
    { count: data.goal_achiever, label: "Business Goal Achiever" },
  ];

  return (
    <div className="container bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl pt-10 pb-12 shadow-inner">
      <div className={`counter-block ${classname}`}>
        <div className="grid xl:grid-cols-4 grid-cols-2 gap-8 px-4">
          {items.map((item, index) => {
            const showK = item.count >= 1000;
            const displayCount = showK ? (item.count / 1000).toFixed(1) : item.count;

            return (
              <div
                key={index}
                className="bg-gray-700/90 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="count-block flex items-center text-4xl font-extrabold text-white">
                  <div className="counter">{displayCount}</div>
                  {showK && <span className="ml-1 text-2xl">k</span>}
                </div>
                <div className="text-sm text-gray-100 mt-2 text-center font-semibold">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Counter;

import React from "react";

const Counter = ({ about, classname }) => {
  return (
    <div className="container bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl pt-10 pb-12 shadow-inner">
      <div className={`counter-block ${classname}`}>
        <div className="grid xl:grid-cols-4 grid-cols-2 gap-8 px-4">
          {[
            {
              count: about.setup_growth,
              label: "Business Setup Growth",
            },
            {
              count: about.passive_income,
              label: "Business Passive Income",
            },
            {
              count: about.problem_solving,
              label: "Business Problem Solving",
            },
            {
              count: about.goal_achiever,
              label: "Business Goal Achiever",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-black/80 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="count-block flex items-center text-3xl font-bold text-teal-500">
                <div className="counter">{item.count}</div>
                <span className="ml-1 text-xl">k</span>
              </div>
              <div className="text-xs text-gray-300 mt-2 text-center font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;

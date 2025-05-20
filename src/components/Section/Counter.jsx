import React from "react";

const Counter = ({ about = {}, classname }) => {
  // Giá trị mặc định nếu about không có đủ dữ liệu
  const defaultData = {
    setup_growth: 500,
    passive_income: 900,
    problem_solving: 800,
    goal_achiever: 600,
  };

  // Dữ liệu hiển thị (ưu tiên from `about`, fallback to default)
  const data = {
    setup_growth: about?.setup_growth ?? defaultData.setup_growth,
    passive_income: about?.passive_income ?? defaultData.passive_income,
    problem_solving: about?.problem_solving ?? defaultData.problem_solving,
    goal_achiever: about?.goal_achiever ?? defaultData.goal_achiever,
  };

  // Danh sách các chỉ số
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
                className="bg-black/80 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="count-block flex items-center text-3xl font-bold text-teal-500">
                  <div className="counter">{displayCount}</div>
                  {showK && <span className="ml-1 text-xl">k</span>}
                </div>
                <div className="text-xs text-gray-300 mt-2 text-center font-medium">
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

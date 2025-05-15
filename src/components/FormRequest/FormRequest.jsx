import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const FormRequest = () => {
  return (
    <div className="form-request-block lg:mt-[100px] sm:mt-16 mt-10">
      <div className="container">
        <div className="heading flex max-xl:flex-col xl:items-center gap-4 justify-between mb-10">
          <div className="heading3 text-3xl ml-4 font-semibold text-blue-800">
            Request a free call back.
          </div>
          <div className="body3 ml-4 text-secondary text-lg max-w-xl text-center sm:text-left text-gray-600">
            Get personalized financial advice to help reach your financial
            goals. Let us help you make informed decisions and achieve the best
            outcomes.
          </div>
        </div>

        <form className="form md:mt-10 mt-6 flex max-lg:flex-col lg:items-center justify-between gap-8 pb-14 border-b border-line">
          <div className="grid lg:grid-cols-3 gap-6 w-full">
            <div className="w-ful ml-4">
              <label htmlFor="name" className="body3 block mb-2 text-gray-700">
                First Name
              </label>
              <input
                id="name"
                className="body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your first name"
                type="text"
                name="name"
              />
            </div>

            <div className="w-full">
              <label htmlFor="email" className="body3 block mb-2 text-gray-700">
                Email
              </label>
              <input
                id="email"
                className="body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                type="email"
                name="email"
              />
            </div>

            <div className="w-full select-arrow-none relative">
              <label htmlFor="category" className="body3 block mb-2 text-gray-700">
                Category
              </label>
              <select
                id="category"
                className="body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800" // Add custom text color here
                name="category"
              >
                <option value="Financial Planning">Financial Planning</option>
                <option value="Business Planning">Business Planning</option>
                <option value="Development Planning">
                  Development Planning
                </option>
              </select>
              <Icon.CaretDown className="absolute top-1/2 -translate-y-1/2 right-5" />
            </div>
          </div>
          <button className="button-main flex-shrink-0 bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-3 mt-6 transition-all duration-300 ease-in-out transform hover:scale-105 mr-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormRequest;

import React from "react";
import Link from "next/link";

const ServiceItem = ({ data, number }) => {
  return (
    <div className="service-item p-8 bg-white rounded-lg border border-line transition-all duration-300 transform hover:scale-95 hover:bg-blue-100 hover:shadow-lg hover:shadow-blue-300">
      <Link
        className="service-item-main h-full"
        href={"/service/service-details/[slug]"}
        as={`/service/service-details/${data.service_name
          .toLowerCase()
          .replace(/ /g, "-")}`}
      >
        <div className="heading flex items-center justify-between">
          <i className={`${data.icon} text-blue md:text-6xl text-5xl`}></i>
          <div className="number heading3 text-gray-500 font-bold text-lg">
            {number + 1}
          </div>
        </div>
        <div className="heading6 text-gray-800 hover:text-blue-500 transition-colors duration-300 mt-6 font-semibold">
          {data.service_name}
        </div>
        <div className="text-secondary text-gray-600 mt-2 hover:text-gray-800 transition-colors duration-300">
          {data.service_short}
        </div>
      </Link>
    </div>
  );
};

export default ServiceItem;

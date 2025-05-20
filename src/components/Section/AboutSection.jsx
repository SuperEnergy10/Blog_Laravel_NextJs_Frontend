'use client'
import React from "react";
import { IMAGE_BASE_URL } from "@/config/config";

const fallbackAbout = {
  title: "About Us",
  description:
    "We are a professional, creative, and dedicated team with a mission to deliver the best products and services to our customers.",
  phone: "0987-654-321",
};

const AboutSection = ({ about }) => {
  const data = {
    ...fallbackAbout,
    ...about,
  };

  return (
    <div className="about-block lg:py-[100px] sm:py-16 py-10 bg-gradient-to-r from-gray-900 via-black to-gray-800">
      <div className="container">
        <div className="row flex max-lg:flex-col lg:items-center gap-y-10 gap-x-8">
          
          {/* Show image only if available */}
          {data.image && (
            <div className="w-full lg:w-1/2">
              <div className="bg-img w-full overflow-hidden rounded-3xl shadow-xl ml-4">
                <img
                  src={`${IMAGE_BASE_URL}/${data.image}`}
                  alt="About"
                  className="w-full h-full object-cover scale-100 hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          )}

          {/* Text content */}
          <div className={`w-full ${data.image ? "lg:w-1/2" : "lg:w-full"} flex-col lg:pl-10 text-white`}>
            <div className="heading3 font-bold text-4xl">{data.title}</div>
            <div className="nav-infor mt-6 text-lg leading-relaxed text-white/90">
              {data.description}
            </div>

            <div className="button-block flex flex-wrap items-center gap-4 md:mt-10 mt-6 pb-2">
              <a
                href="#"
                className="px-7 py-3 bg-gradient-to-r from-gray-800 via-gray-700 to-black text-white rounded-full shadow-xl hover:brightness-125 transition-all duration-300 text-sm font-semibold uppercase tracking-wider"
              >
                Get Started
              </a>
              <a
                href={`tel:${data.phone}`}
                className="px-7 py-3 bg-black text-white rounded-full border-2 border-white shadow-xl hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold"
              >
                {data.phone}
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutSection;

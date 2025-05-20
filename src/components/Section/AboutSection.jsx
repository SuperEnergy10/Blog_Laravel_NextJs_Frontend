'use client'
import Image from "next/image";
import React from "react";
import { IMAGE_BASE_URL } from "@/config/config";

const AboutSection = ({ about }) => {
  const hasContent = about && (about.title || about.description || about.phone);

  return (
    <div className="about-block lg:py-[100px] sm:py-16 py-10 bg-gradient-to-r from-gray-900 via-black to-gray-800">
      <div className="container">
        <div className="row flex max-lg:flex-col lg:items-center gap-y-10 gap-x-8">
          {/* Content Section */}
          <div className="w-full flex flex-col items-center text-center text-white">
            <div className="heading3 font-extrabold text-4xl text-white/90">
              {hasContent ? about.title : "Welcome to Our Business"}
            </div>
            <div className="nav-infor mt-6 text-lg leading-relaxed text-gray-200 max-w-3xl">
              {hasContent ? about.description : "We're working on updating our story. Stay tuned for exciting updates about our mission and values!"}
            </div>

            {/* Buttons */}
            <div className="button-block flex flex-wrap justify-center gap-4 md:mt-10 mt-6 pb-2">
              <a
                href="#"
                className="px-7 py-3 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 text-white rounded-full shadow-xl hover:brightness-110 transition-all duration-300 text-sm font-semibold uppercase tracking-wider"
              >
                Get Started
              </a>
              {about?.phone && (
                <a
                  href={`tel:${about.phone}`}
                  className="px-7 py-3 bg-white text-black rounded-full border-2 border-white shadow-xl hover:bg-gray-100 transition-all duration-300 text-sm font-semibold"
                >
                  {about.phone}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

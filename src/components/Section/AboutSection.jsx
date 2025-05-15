'use client'
import Image from "next/image";
import React from "react";
import { IMAGE_BASE_URL } from "@/config/config";

const AboutSection = ({ about }) => {
  // Nếu about hoặc about.image không tồn tại, hiển thị thông báo hoặc ảnh mặc định
  if (!about || !about.image) {
    return (
      <div className="about-block lg:py-[100px] sm:py-16 py-10 bg-gradient-to-r from-gray-900 via-black to-gray-800">
        <div className="container text-center text-white">
          <p>Thông tin đang được cập nhật...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="about-block lg:py-[100px] sm:py-16 py-10 bg-gradient-to-r from-gray-900 via-black to-gray-800">
      <div className="container">
        <div className="row flex max-lg:flex-col lg:items-center gap-y-10 gap-x-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-img w-full overflow-hidden rounded-3xl shadow-xl ml-4">
              <Image
                src={`${IMAGE_BASE_URL}/${about.image}`}
                width={1200}
                height={800}
                alt="About"
                className="w-full h-full object-cover scale-100 hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex-col lg:pl-10 text-white">
            <div className="heading3 font-bold text-4xl">{about.title}</div>
            <div className="nav-infor mt-6 text-lg leading-relaxed text-white/90">
              {about.description}
            </div>

            {/* Buttons */}
            <div className="button-block flex flex-wrap items-center gap-4 md:mt-10 mt-6 pb-2">
              <a
                href="#"
                className="px-7 py-3 bg-gradient-to-r from-gray-800 via-gray-700 to-black text-white rounded-full shadow-xl hover:brightness-125 transition-all duration-300 text-sm font-semibold uppercase tracking-wider"
              >
                Get Started
              </a>
              <a
                href="#"
                className="px-7 py-3 bg-black text-white rounded-full border-2 border-white shadow-xl hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold"
              >
                {about.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

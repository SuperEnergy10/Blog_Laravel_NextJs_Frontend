"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { API_BASE_URL, IMAGE_BASE_URL } from "@/config/config";

const Slider = () => {
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/sliders`);
        const data = await response.json();
        setSliders(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <div className="spinner-border animate-spin rounded-full border-4 border-t-4 border-blue-500 h-12 w-12"></div>
      </div>
    );
  }

  if (!sliders.length) {
    return (
      <div className="flex justify-center items-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <p className="text-xl">No sliders available.</p>
      </div>
    );
  }

  return (
    <div className="slider-block relative">
      {/* Nút điều hướng trái */}
      <div className="prev-arrow absolute top-1/2 left-4 z-20 -translate-y-1/2 cursor-pointer">
        <Icon.CaretLeft className="text-white text-3xl drop-shadow-md hover:scale-110 transition" weight="bold" />
      </div>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: ".prev-arrow",
          nextEl: ".next-arrow",
        }}
        loop={true}
        pagination={{ clickable: true }}
        speed={400}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
          delay: 4000,
        }}
        className="h-full"
      >
        {sliders.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div className="slider-item relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-xl shadow-lg overflow-hidden">
              <Image
                src={
                  slider.image
                    ? `${IMAGE_BASE_URL}/${slider.image}`
                    : "/upload/no_image.jpg"
                }
                alt={slider.heading}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                className="object-cover w-full h-full transition-all duration-500 ease-in-out"
              />
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/30">
                <div className="container text-white text-center px-4">
                  <div className="heading2 text-3xl sm:text-4xl font-bold">
                    <div className="mb-2">{slider.heading}</div>
                    <div>Our Solution</div>
                  </div>
                  <div className="body2 mt-4 text-base sm:text-lg text-white/80">
                    {slider.description}
                  </div>
                  <div className="button-block mt-6">
                    <Link
                      className="inline-block px-6 py-3 bg-blue-700 text-white hover:bg-blue-500 rounded-lg transition"
                      href={slider.link}
                    >
                      Discover Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Nút điều hướng phải */}
      <div className="next-arrow absolute top-1/2 right-4 z-20 -translate-y-1/2 cursor-pointer">
        <Icon.CaretRight className="text-white text-3xl drop-shadow-md hover:scale-110 transition" weight="bold" />
      </div>
    </div>
  );
};

export default Slider;

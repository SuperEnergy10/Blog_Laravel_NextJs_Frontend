"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import { API_BASE_URL } from "@/config/config";
import ClipLoader from "react-spinners/ClipLoader";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(testimonial);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/gettestimonial`);
        const data = await response.json();
        setTestimonial(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, []);

  return (
    <div className="testimonial-block py-6 lg:py-12">
      <div className="container">
        <div className="testimonial-main bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 lg:pt-16 sm:pt-12 pt-6 lg:pb-8 pb-6 sm:my-12 my-8 lg:rounded-[40px] rounded-2xl flex items-center justify-center">
          <div className="content sm:w-2/3 w-[85%]">
            <div className="heading3 text-center text-3xl font-semibold text-white mb-6">
              Trusted By Professionals
            </div>

            {loading ? (
              <div className="flex justify-center items-center h-[500px]">
                <ClipLoader color="#ffffff" size={50} />
              </div>
            ) : (
              <Swiper
                spaceBetween={16}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                speed={400}
                modules={[Pagination, Autoplay, Navigation]}
                autoplay={{
                  delay: 4000,
                }}
                className="h-full relative lg:mt-6 mt-4"
              >
                {testimonial.slice(0, 3).map((item, index) => (
                  <SwiperSlide className="lg:pb-24 pb-20" key={index}>
                    <div className="text-2xl font-medium text-center text-white">
                      {String.raw`"`}
                      {item.message} {String.raw`"`} 
                    </div>
                    <div className="text-lg text-center mt-5 text-white font-semibold">
                      {item.name} // {item.position}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

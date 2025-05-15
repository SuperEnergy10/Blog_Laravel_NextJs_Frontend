"use client";
import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { API_BASE_URL, IMAGE_BASE_URL } from "@/config/config";

const PaymentGatewayTwo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [gatewaytwo, setGatewaytwo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/gatewaytwo`);
        const data = await response.json();
        setGatewaytwo(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, []);

  return (
    <div>
      <section
        className="payment-gateway-two lg:mt-[100px] sm:mt-16 mt-10"
        ref={ref}
      >
        <div className="container">
          <div className="content flex flex-col lg:flex-row items-center gap-8 bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 rounded-3xl p-8 shadow-2xl">
            {/* Text Section */}
            <div className="w-full xl:w-5/12 flex flex-col gap-y-6 text-white">
              <h3 className="heading3 text-2xl md:text-3xl font-extrabold leading-tight">
                {gatewaytwo.title}
              </h3>
              <div className="body3 text-lg opacity-90">
                {gatewaytwo.description}
              </div>
              <div className="button-block mt-6">
              <Link
                  className="inline-block bg-white text-teal-600 font-semibold rounded-full px-8 py-3 hover:bg-teal-700 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                  href="/"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Image & Features */}
            <div className="w-full xl:w-7/12">
              <div
                className="right transition-all duration-700 ease-in-out pl-4"
                style={{
                  transform: isInView ? "none" : "translateY(60px)",
                  opacity: isInView ? 1 : 0,
                }}
              >
                {/* Main Image */}
                <div className="bg-img mb-6 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    width={5000}
                    height={5000}
                    className="w-full h-auto object-cover"
                    src={`${IMAGE_BASE_URL}/${gatewaytwo.image}`}
                    alt="image"
                  />
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="feature-item bg-white py-4 px-6 rounded-2xl flex items-center gap-4 shadow-md">
                    <i className="icon-list text-2xl p-4 rounded-2xl bg-red-400 text-white"></i>
                    <div>
                      <div className="text-xl font-bold text-gray-800">
                        {gatewaytwo.project}K+
                      </div>
                      <div className="text-sm text-indigo-600 font-medium">
                        Projects
                      </div>
                    </div>
                  </div>

                  <div className="feature-item bg-white py-4 px-6 rounded-2xl flex items-center gap-4 shadow-md">
                    <Icon.Star
                      weight="fill"
                      className="text-yellow-600 text-3xl"
                    />
                    <div>
                      <div className="text-xl font-bold text-gray-800">
                        {gatewaytwo.review}
                      </div>
                      <div className="text-sm text-indigo-600 font-medium">
                        Satisfaction
                      </div>
                    </div>
                  </div>

                  <div className="feature-item bg-white py-4 px-6 rounded-2xl flex items-center gap-4 shadow-md md:col-span-2">
                    <i className="icon-user text-2xl p-4 rounded-2xl bg-red-600 text-white"></i>
                    <div>
                      <div className="text-xl font-bold text-gray-800">
                        {gatewaytwo.experience} Years
                      </div>
                      <div className="text-sm text-indigo-600 font-medium">
                        Product Designer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentGatewayTwo;

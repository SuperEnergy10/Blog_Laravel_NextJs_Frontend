import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Header/Menu/Menu";
import TopNav from "@/components/Header/TopNav/TopNav";
import Partner from "@/components/Partner/Partner";
import AboutSection from "@/components/Section/AboutSection";
import Breadcrumb from "@/components/Section/Breadcrumb";
import Counter from "@/components/Section/Counter";
import Service from "@/components/Service/Service";
import React from "react";
import serviceData from "@/data/service.json";
import Image from "next/image";

const ServicePage = () => {
  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-black via-gray-900 to-gray-800">
      <header id="header" className="bg-gradient-to-r from-blue-800 to-blue-600">
        <TopNav />
        <Menu />
      </header>

      <main className="content">
        <Breadcrumb
          link="Our Services"
          img="/images/header.webp"
          title="Our Services"
          desc="The jobs report soundly beat expectations, with job gains broadly spread across the economy and about 60% higher"
          className="bg-gradient-to-br from-[#1a1a1a] via-[#333333] to-[#1a1a1a]"
        />

        <div className="mt-[100px] bg-gradient-to-r from-gray-700 via-gray-800 to-black py-16">
          <div className="container">
            <div className="flex gap-8 max-lg:flex-col-reverse">
              <div className="w-full lg:w-1/2 flex flex-col justify-between gap-5 pr-10">
                <div className="heading3 text-white ml-4">
                  Credit Card Management Use Wisely
                  <div className="body2 text-secondary mt-4">
                    The jobs report soundly beat expectations, with job gains
                    broadly spread across the economy and about The jobs report
                    soundly beat expectations, with job gains broadly spread
                    across the economy and about
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 mr-4">
                <div className="bg-img w-full overflow-hidden rounded-xl shadow-lg">
                  <Image
                    alt="Image"
                    width={5000}
                    height={5000}
                    className="w-full h-full block"
                    src="/images/assessment.webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Service data={serviceData} className="bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a]" />
      </main>

      <Partner className="lg:mt-[100px] sm:mt-16 mt-10 bg-gradient-to-r from-black via-gray-800 to-black py-16" />
      <footer id="footer" className="bg-black text-white">
        <Footer />
      </footer>
    </div>
  );
};

export default ServicePage;

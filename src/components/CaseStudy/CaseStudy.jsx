import Link from "next/link";
import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const CaseStudy = () => {
  return (
    <div>
      <section className="case-study-block style-one lg:pt-[100px] sm:pt-16 pt-10">
        <div className="container">
          <div className="heading text-center">
            <h3 className="heading3 font-bold text-3xl ">Case Studies</h3>
            <div className="right flex flex-col items-center gap-2 mt-3">
              <div className="body3">
                Experience the excitement and potential of the
              </div>
              <Link
                className="flex items-center gap-2 hover:bg-blue-500 text-white duration-300 px-4 py-2 rounded-lg"
                href="/"
              >
                <div className="text-button">View All Case List </div>
                <Icon.CaretDoubleRight weight="bold" className="text-xs mt-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="list-case-study md:mt-10 mt-6">
          <div className="list grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
            <div className="w-full">
              <div className="case-study-item hover:scale-105 transform transition-all duration-300">
                <div className="bg-img relative">
                  <Image
                    width={5000}
                    height={5000}
                    className="w-full h-full object-cover rounded-lg"
                    src="/images/casefour.webp"
                    alt="img"
                  />
                </div>
                <div className="text flex flex-col justify-between gap-3 p-4 bg-gradient-to-b from-transparent to-black/50 rounded-lg">
                  <div className="heading5">
                    <Link className="text-white" href="/">
                      Payment solution
                    </Link>
                  </div>
                  <div className="body2 text-white">
                    Experience the excitement and potential of the
                    cryptocurrency market with our expert.
                  </div>
                  <Link className="flex items-center gap-1" href="/">
                    <div className="text-button text-white">Read More</div>
                    <Icon.CaretDoubleRight
                      weight="bold"
                      className="text-xs text-white mt-1"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Các phần tử case-study-item còn lại... */}
            <div className="w-full">
              <div className="case-study-item hover:scale-105 transform transition-all duration-300">
                <div className="bg-img relative">
                  <Image
                    width={5000}
                    height={5000}
                    className="w-full h-full object-cover rounded-lg"
                    src="/images/casethree.webp"
                    alt="img"
                  />
                </div>
                <div className="text flex flex-col justify-between gap-3 p-4 bg-gradient-to-b from-transparent to-black/50 rounded-lg">
                  <div className="heading5">
                    <Link className="text-white" href="/">
                      Payment Solution
                    </Link>
                  </div>
                  <div className="body2 text-white">
                    Experience the excitement and potential of the
                    cryptocurrency market with our expert.
                  </div>
                  <Link className="flex items-center gap-1" href="/">
                    <div className="text-button text-white">Read More</div>
                    <Icon.CaretDoubleRight
                      weight="bold"
                      className="text-xs text-white mt-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="case-study-item hover:scale-105 transform transition-all duration-300">
                <div className="bg-img relative">
                  <Image
                    width={5000}
                    height={5000}
                    className="w-full h-full object-cover rounded-lg"
                    src="/images/casefour.webp"
                    alt="img"
                  />
                </div>
                <div className="text flex flex-col justify-between gap-3 p-4 bg-gradient-to-b from-transparent to-black/50 rounded-lg">
                  <div className="heading5">
                    <Link className="text-white" href="/">
                      Payment solution
                    </Link>
                  </div>
                  <div className="body2 text-white">
                    Experience the excitement and potential of the
                    cryptocurrency market with our expert.
                  </div>
                  <Link className="flex items-center gap-1" href="/">
                    <div className="text-button text-white">Read More</div>
                    <Icon.CaretDoubleRight
                      weight="bold"
                      className="text-xs text-white mt-1"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Các phần tử case-study-item còn lại... */}
            <div className="w-full">
              <div className="case-study-item hover:scale-105 transform transition-all duration-300">
                <div className="bg-img relative">
                  <Image
                    width={5000}
                    height={5000}
                    className="w-full h-full object-cover rounded-lg"
                    src="/images/casethree.webp"
                    alt="img"
                  />
                </div>
                <div className="text flex flex-col justify-between gap-3 p-4 bg-gradient-to-b from-transparent to-black/50 rounded-lg">
                  <div className="heading5">
                    <Link className="text-white" href="/">
                      Payment Solution
                    </Link>
                  </div>
                  <div className="body2 text-white">
                    Experience the excitement and potential of the
                    cryptocurrency market with our expert.
                  </div>
                  <Link className="flex items-center gap-1" href="/">
                    <div className="text-button text-white">Read More</div>
                    <Icon.CaretDoubleRight
                      weight="bold"
                      className="text-xs text-white mt-1"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Các phần tử còn lại */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;

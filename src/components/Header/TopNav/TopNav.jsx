"use client";
import React, { useEffect, useState } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { API_BASE_URL } from "@/config/config";

const TopNav = () => {
  const [header, setHeader] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(header)

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/sitesetting`);
        const data = await response.json();
        setHeader(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, []);

  return (
    <div className="bg-slate-600">
      <div className="container flex items-center justify-between h-[44px]">
        <div className="left-block flex items-center">
          {/* Location */}
          <div className="location flex items-center max-lg:hidden">
            <Icon.MapPin className="text-white text-xl" />
            <span className="ml-2 caption1 text-white">
              {" "}
              {header.address}
            </span>{" "}
          </div>

          {/* Mail */}
          <div className="mail lg:ml-7 flex items-center">
            <Icon.Envelope className="text-white text-xl" />
            <span className="ml-2 caption1 text-white">
              {header.email}
            </span>{" "}
          </div>
        </div>

        <div className="right-block flex items-center gap-5">
          {/* Line divider */}
          <div className="line h-6 w-px bg-grey max-sm:hidden"></div>

          {/* Social Media Links */}
          <div className="list-social flex items-center gap-2 max-sm:hidden">
            <Link
              className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 ease-in-out hover:bg-blue-500"
              href="https://facebook.com"
              target="_blank"
            >
              <Icon.FacebookLogo className="text-white text-xl" />
            </Link>
            <Link
              className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 ease-in-out hover:bg-blue-700"
              href="https://linkedin.com"
              target="_blank"
            >
              <Icon.LinkedinLogo className="text-white text-xl" />
            </Link>
            <Link
              className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 ease-in-out hover:bg-blue-400"
              href="https://twitter.com"
              target="_blank"
            >
              <Icon.TwitterLogo className="text-white text-xl" />
            </Link>
            <Link
              className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 ease-in-out hover:bg-purple-500"
              href="https://instagram.com"
              target="_blank"
            >
              <Icon.InstagramLogo className="text-white text-xl" />
            </Link>
            <Link
              className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 ease-in-out hover:bg-red-600"
              href="https://youtube.com"
              target="_blank"
            >
              <Icon.YoutubeLogo className="text-white text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;








"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const Menu = () => {
  const pathname = usePathname();
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/service", label: "Our Services" },
    { path: "/case-studies", label: "Case Studies" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <div className="header-menu bg-gradient-to-r from-blue-500 to-teal-400">
        <div className="container flex items-center justify-between h-20">
          {/* Logo */}
          <Link className="menu-left-block" href="/">
            <Image
              src="/images/Logo.png"
              width={2000}
              height={1000}
              alt="logo"
              priority
              className="w-[149px] max-sm:w-[132px]"
            />
          </Link>

          {/* Desktop menu */}
          <div className="menu-center-block h-full hidden md:block">
            <ul className="menu-nav flex items-center gap-6 h-full">
              {menuItems.map((item) => (
                <li
                  key={item.path}
                  className={`nav-item h-full flex items-center justify-center ${
                    pathname === item.path
                      ? "text-white font-semibold border-b-2 border-white"
                      : "text-gray-200"
                  }`}
                >
                  <Link
                    className="nav-link text-title flex items-center gap-1 hover:text-white hover:bg-teal-600 p-2 rounded-md transition-colors duration-200"
                    href={item.path}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Call + Mobile button */}
          <div className="menu-right-block flex items-center gap-3">
            <div className="icon-call">
              <i className="icon-phone-call text-4xl text-white" />
            </div>
            <div className="text ml-1">
              <div className="caption1 text-sm text-white">Contact Us</div>
              <div className="text-button text-lg font-semibold text-white">
                +123 456 789
              </div>
            </div>

            {/* Mobile hamburger */}
            <div
              className="menu-humburger md:hidden cursor-pointer"
              onClick={() => setOpenMenuMobile(!openMenuMobile)}
              aria-label="Open/close mobile menu"
            >
              <Icon.List className="text-2xl text-white" weight="bold" />
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="menu-mobile-block"
          className={`menu-mobile-main transition-all duration-300 ease-in-out ${
            openMenuMobile ? "block" : "hidden"
          } md:hidden`}
        >
          <div className="container">
            <ul className="menu-nav-mobile flex flex-col py-2">
              {menuItems.map((item) => (
                <li
                  key={item.path}
                  className={`nav-item-mobile py-2 px-3 cursor-pointer ${
                    pathname === item.path
                      ? "bg-teal-500 text-white font-semibold"
                      : "text-black hover:bg-teal-200 hover:text-black"
                  }`}
                >
                  <Link
                    className="nav-link-mobile flex items-center justify-between"
                    href={item.path}
                    onClick={() => setOpenMenuMobile(false)} // Close menu after clicking a link
                  >
                    <span className="body2 font-bold">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;

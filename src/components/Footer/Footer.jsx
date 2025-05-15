"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import { API_BASE_URL } from "@/config/config";

const Footer = () => {
  const [footerData, setFooterData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/sitesetting`);
        const data = await response.json();
        setFooterData(data);
      } catch (error) {
        console.error("Error fetching footer:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFooter();
  }, []);

  const socialLinks = [
    { icon: "icon-facebook", link: "https://facebook.com/" },
    { icon: "icon-in", link: "https://linkedin.com/" },
    { icon: "icon-twitter", link: "https://twitter.com/" },
    { icon: "icon-youtube", link: "https://youtube.com/" },
  ];

  const footerSections = [
    {
      heading: "Quick Links",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Pages",
      links: [
        { label: "FAQ", href: "/faq" },
        { label: "Pricing", href: "/pricing" },
        { label: "Testimonials", href: "/testimonials" },
        { label: "Portfolio", href: "/portfolio" },
      ],
    },
    {
      heading: "Blog",
      links: [
        { label: "All Blog", href: "/blog" },
        { label: "Latest Posts", href: "/blog/latest" },
        { label: "Categories", href: "/blog/categories" },
        { label: "Tags", href: "/blog/tags" },
      ],
    },
  ];

  return (
    <div className="footer-block bg-[#0A1325] pt-[60px] text-white">
      <div className="container px-4 mx-auto">
        {loading ? (
          <div className="text-center py-10">Loading footer...</div>
        ) : (
          <div className="flex max-lg:flex-col max-lg:items-start gap-y-10 pb-10">
            {/* Logo & Description */}
            <div className="lg:w-1/4">
              <div className="footer-company-infor flex flex-col justify-between gap-5">
                <Image
                  width={400}
                  height={100}
                  className="footer-logo w-[145px]"
                  src="/images/LogoWhite.png"
                  alt="Logo"
                />
                <div className="text-sm text-white/80">
                  {footerData?.footer_message}
                </div>
                <div className="list-social flex items-center gap-2">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      className="rounded-full w-7 h-7 border-2 border-gray-500 text-gray-300 flex items-center justify-center hover:text-white hover:border-white transition"
                      href={social.link}
                      target="_blank"
                    >
                      <i className={`${social.icon} text-sm`} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links Sections */}
            <div className="lg:w-1/2">
              <div className="footer-navigate flex flex-wrap justify-center gap-20">
                {footerSections.map((section, index) => (
                  <div className="footer-nav-item" key={index}>
                    <div className="item-heading font-semibold mb-2">
                      {section.heading}
                    </div>
                    <ul className="list-nav text-white text-sm">
                      {section.links.map((link, idx) => (
                        <li className="mt-3" key={idx}>
                          <Link
                            href={link.href}
                            className="hover:text-blue-400 transition"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Newsletter */}
            <div className="lg:w-1/4">
              <div className="company-contact">
                <div className="heading font-semibold text-white text-sm">
                  NewsLetter
                </div>
                <div className="mt-3">
                  <div className="text-sm text-white/80">Need Help? 24/7</div>
                  <div className="font-bold mt-1">{footerData?.phone}</div>
                </div>
                <div className="locate mt-3">
                  <div className="text-sm text-white/80">
                    {footerData?.address}
                  </div>
                </div>
                <form className="send-block mt-5 flex items-center h-[45px] rounded-lg overflow-hidden">
                  <input
                    className="text-sm text-secondary h-full w-full pr-4 pl-3 text-black"
                    type="email"
                    placeholder="Your Email Address"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center w-[45px] h-[45px] bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 transition-all"
                  >
                    <PaperPlaneTilt className="text-white hover:scale-110 transition-transform duration-300" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="h-px bg-gray-600 my-6" />

        {/* Footer Bottom */}
        <div className="footer-bottom flex flex-col sm:flex-row items-center justify-between pt-3 pb-3 text-sm">
          <div className="copy-right text-white/70">
            ©2024 EasyTech. All Rights Reserved.
          </div>
          <div className="nav-link flex items-center gap-3 mt-2 sm:mt-0">
            <Link href="/terms" className="hover:text-blue-400 transition">
              Terms of Service
            </Link>
            <span>|</span>
            <Link href="/privacy" className="hover:text-blue-400 transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

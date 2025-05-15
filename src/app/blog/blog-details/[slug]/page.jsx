"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopNav from "@/components/Header/TopNav/TopNav";
import Menu from "@/components/Header/Menu/Menu";
import Footer from "@/components/Footer/Footer";
import Partner from "@/components/Partner/Partner";
import Breadcrumb from "@/components/Section/Breadcrumb";
import { API_BASE_URL, IMAGE_BASE_URL } from "@/config/config";
import ClipLoader from "react-spinners/ClipLoader";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const categories = [
  "Payment Solution",
  "Personal Finance",
  "Online Banking",
  "Financial Planning",
];

const BlogDetails = ({ params }) => {
  const slug = React.use(params).slug;

  const [blogDetails, setBlogDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const fetchItem = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/allblog/${slug}`);
          if (!response.ok) {
            throw new Error("Blog not found");
          }
          const data = await response.json();
          setBlogDetails(data);
        } catch (error) {
          console.error("Error fetching data", error);
          setBlogDetails(null); // Set blogDetails to null if an error occurs
        } finally {
          setLoading(false);
        }
      };
      fetchItem();
    }
  }, [slug]);

  const formattedDate = blogDetails?.created_at
    ? new Date(blogDetails.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-black to-gray-800 text-gray-800">
      <header id="header">
        <TopNav />
        <Menu />
      </header>

      {loading ? (
        <div className="flex justify-center items-center h-[500px]">
          <ClipLoader color="#3498db" size={50} />
          <p className="mt-4 text-blue-500">Loading data...</p>
        </div>
      ) : !blogDetails || Object.keys(blogDetails).length === 0 ? (
        <div className="text-center py-20">
          <h1 className="text-2xl font-semibold text-gray-600">
            Blog not found
          </h1>
          <p className="text-gray-400 mt-2">
            We couldn’t find the article you’re looking for.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block px-6 py-3 bg-blue-700 text-white hover:bg-blue-500 rounded-lg transition"
          >
            Back to Home
          </Link>
        </div>
      ) : (
        <main className="content">
          <Breadcrumb
            link={blogDetails.category_name}
            img="/images/header.webp"
            title={blogDetails.post_title}
            desc="The jobs report soundly beat expectations, with job gains broadly spread across the economy and about 60% higher"
          />

          <section className="py-10 sm:py-16 lg:py-[100px]">
            <div className="container mx-auto px-4">
              <div className="flex flex-col xl:flex-row gap-8">
                {/* LEFT: MAIN CONTENT */}
                <div className="w-full xl:w-3/4 xl:pr-20">
                  <h1 className="text-3xl font-bold mb-6">
                    {blogDetails.post_title}
                  </h1>

                  <div className="rounded-xl overflow-hidden mb-6">
                    <Image
                      width={1000}  // Adjusted image width for proper fit
                      height={600}  // Adjusted image height for proper fit
                      className="w-full h-auto rounded-xl"
                      src={`${IMAGE_BASE_URL}/${blogDetails.image}`}
                      alt={blogDetails.post_title}
                    />
                  </div>

                  <div className="date flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <div className="author text-blue-500">
                      By{" "}
                      <span className="text-blue-500 font-medium">Admin</span>
                    </div>
                    <div className="item-date flex items-center gap-2">
                      <Icon.CalendarBlank weight="bold" />
                      <span>{formattedDate}</span>
                      <div className="py-1 px-3 bg-blue-100 text-blue-600 rounded-full capitalize">
                        {blogDetails.category_name}
                      </div>
                    </div>
                  </div>

                  {/* Long Description */}
                  <div
                    className="body2 text-white mt-6 prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: blogDetails.long_descp }}
                  />
                </div>

                {/* RIGHT: SIDEBAR */}
                <aside className="w-full xl:w-1/4 space-y-8">
                  {/* Categories */}
                  <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-semibold mb-4 text-white">Categories</h2>

                    <ul className="space-y-3">
                      {categories.map((category, index) => (
                        <li key={index}>
                          <Link
                            href="/"
                            className="block px-4 py-2 rounded-lg bg-gray-100 hover:bg-blue-500 hover:text-white transition text-gray-800"
                          >
                            {category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ads Block */}
                  <div className="relative rounded-xl overflow-hidden">
                    <Image
                      src="/images/ads.webp"
                      alt="Let's Talk"
                      width={500}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-white text-xl font-semibold">
                          Let's Talk
                        </h3>
                        <p className="text-white mt-2">
                          If you have project contact us
                        </p>
                      </div>
                      <div className="mt-4">
                        <Link
                          href="/contact"
                          className="bg-white text-black font-medium py-2 px-4 rounded hover:bg-gray-200 transition"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </main>
      )}

      <Partner className="mt-10 sm:mt-16 lg:mt-[100px]" />
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default BlogDetails;

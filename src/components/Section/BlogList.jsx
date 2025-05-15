'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { API_BASE_URL, IMAGE_BASE_URL } from "@/config/config";
import ClipLoader from "react-spinners/ClipLoader";
import { CalendarBlank } from "@phosphor-icons/react";

const BlogList = () => {
  const [blog, setBlog] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const blogUrl = selectedCategory
          ? `${API_BASE_URL}/category/${selectedCategory}/blogs`
          : `${API_BASE_URL}/allblog`;

        const [blogRes, catRes] = await Promise.all([
          fetch(blogUrl),
          fetch(`${API_BASE_URL}/blogcat`),
        ]);

        const blogData = await blogRes.json();
        const catData = await catRes.json();

        setBlog(blogData);
        setCategories(catData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const getTextFromHTML = (html, limit = 300) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    const text = div.textContent || div.innerText || "";
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="list-blog lg:py-[100px] sm:py-16 py-10">
      <div className="container">
        <div className="flex flex-col gap-y-10 lg:flex-row">
          {/* Blog content */}
          <div className="w-full lg:w-2/3">
            <div className="list flex flex-col gap-y-10">
              {loading ? (
                <div className="flex justify-center items-center h-[500px]">
                  <ClipLoader color="#3498db" size={50} />
                </div>
              ) : (
                blog.slice(0, 6).map((item, index) => {
                  const formattedDate = new Date(
                    item.created_at
                  ).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  });

                  return (
                    <Link
                      key={item.id || index}
                      className="blog-item flex max-md:flex-col md:items-center gap-7 gap-y-5 ml-4"
                      href={`/blog/blog-details/${item.post_slug
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                    >
                      <div className="w-full md:w-1/2">
                        <div className="bg-img w-full overflow-hidden rounded-2xl">
                          <Image
                            width={500}
                            height={300}
                            className="w-full h-full block object-cover"
                            src={`${IMAGE_BASE_URL}/${item.image}`}
                            alt={item.post_title}
                          />
                        </div>
                      </div>

                      <div className="w-full md:w-1/2">
                        <div className="caption2 py-1 px-3 bg-green-100 text-green-800 rounded-full inline-block capitalize">
                          {item.category_name}
                        </div>
                        <div className="heading6 mt-2">{item.post_title}</div>
                        <div className="date flex items-center gap-4 mt-2">
                          <div className="author caption2 text-secondary">
                            By <span className="text-onsurface">Admin</span>
                          </div>
                          <div className="item-date flex items-center">
                            <CalendarBlank weight="bold" />
                            <span className="ml-1 caption2">
                              {formattedDate}
                            </span>
                          </div>
                        </div>
                        <div className="body3 text-secondary mt-4 pb-4">
                          {getTextFromHTML(item.long_descp)}
                        </div>
                        <div className="read font-bold underline">
                          Read More
                        </div>
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 lg:pl-[55px]">
            {/* Search bar */}
            <div className="search-block rounded-lg bg-surface h-[50px] relative mb-6">
              <input
                className="rounded-lg bg-surface w-full h-full pl-4 pr-12 bg-green-50 text-green-800"
                type="text"
                placeholder="Search"
              />
            </div>

            {/* Category list */}
            <div className="cate-block md:mt-10 mt-6">
              <div className="heading6">Blog Category</div>
              <div className="list-nav mt-4">
                <div
                  className={`text-button mt-2 cursor-pointer ml-2 ${
                    selectedCategory === null
                      ? "font-extrabold text-primary"
                      : "text-secondary"
                  }`}
                  onClick={() => handleCategoryClick(null)}
                >
                  All Category
                </div>
                {categories.map((cat) => (
                  <div
                    key={cat.id}
                    className={`text-button mt-2 cursor-pointer ml-2 ${
                      selectedCategory === cat.id
                        ? "font-extrabold text-primary"
                        : "text-secondary"
                    }`}
                    onClick={() => handleCategoryClick(cat.id)}
                  >
                    {cat.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent posts */}
        {!loading && (
          <div className="recent-post-block md:mt-10 mt-6 ml-4">
            <div className="recent-post-heading heading7">Recent Post</div>
            <div className="list-recent-post flex flex-col gap-6 mt-4">
              {blog.slice(0, 3).map((item, index) => (
                <Link
                  key={item.id || index}
                  className="recent-post-item flex items-start gap-4 cursor-pointer"
                  href={`/blog/blog-details/${item.post_slug
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                >
                  <div className="item-img flex-shrink-0 w-20 h-20 rounded">
                    <Image
                      width={80}
                      height={80}
                      src={`${IMAGE_BASE_URL}/${item.image}`}
                      alt={item.post_title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="item-infor w-full">
                    <div className="item-date caption2">
                      {new Date(item.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="item-title mt-1">{item.post_title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { IMAGE_BASE_URL } from "@/config/config";

const BlogItem = ({ data }) => {
  const formattedDate = new Date(data.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="blog-item ml-4"> {/* Added margin-left here */}
      <Link
        className="blog-item-main h-full block bg-white border border-line overflow-hidden rounded-2xl hover-box-shadow duration-500"
        href={"/blog/blog-details/[slug]"}
        as={`/blog/blog-details/${data.post_slug
          .toLowerCase()
          .replace(/ /g, "-")}`}
      >
        {/* Hình ảnh */}
        <div className="bg-img w-full overflow-hidden">
          <Image
            width={5000}
            height={5000}
            className="w-full h-full block"
            src={`${IMAGE_BASE_URL}/${data.image}`}
            alt={data.post_title}
          />
        </div>

        {/* Nội dung */}
        <div className="infor sm:p-6 p-4">
          {/* Badge category with updated background color */}
          <div className="text-sm py-1 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full inline-block capitalize font-semibold tracking-wide hover:brightness-110 transition-all duration-300 shadow-md">
            {data.category_name}
          </div>

          {/* Tiêu đề */}
          <div className="text-xl font-bold mt-3 text-gray-900 hover:text-indigo-700 transition-colors duration-300 leading-snug">
            {data.post_title}
          </div>

          {/* Thông tin tác giả và ngày */}
          <div className="date flex items-center gap-4 mt-3 text-sm text-gray-600">
            <div className="author">
              by <span className="font-semibold text-gray-900">Admin</span>
            </div>
            <div className="item-date flex items-center gap-1 text-gray-500">
              <Icon.CalendarBlank weight="fill" className="text-indigo-600" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;

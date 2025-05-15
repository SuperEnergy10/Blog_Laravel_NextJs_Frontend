'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { API_BASE_URL, IMAGE_BASE_URL } from '@/config/config';

const ServiceDetails = ({ params }) => {
  const { slug } = params;
  const [serviceDetails, setServiceDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  // Convert HTML -> plain text
  const getTextFromHTML = (html) => {
    if (!html) return '';
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };

  useEffect(() => {
    if (slug) {
      const fetchItem = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/service/${slug}`);
          const data = await response.json();
          setServiceDetails(data);
        } catch (error) {
          console.error('Error fetching service details:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchItem();
    }
  }, [slug]);

  return (
    <div>
      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : (
        <BlogList data={serviceDetails} />
      )}
    </div>
  );
};

const BlogList = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <p className="text-center text-gray-500">No data available.</p>;
  }

  return (
    <div className="list-blog lg:py-[100px] sm:py-16 py-10">
      <div className="container">
        <div className="flex flex-col gap-y-10 lg:flex-row">
          <div className="w-full lg:w-2/3">
            <div className="list flex flex-col gap-y-10">
              {data.slice(0, 5).map((item, index) => {
                const {
                  slug,
                  img,
                  title,
                  category,
                  author = 'Admin',
                  date = '',
                  desc = '',
                } = item;

                const imageUrl = img.startsWith('http') ? img : `${IMAGE_BASE_URL}/${img}`;
                const plainTextDesc = desc.length > 0 ? desc : '';

                return (
                  <Link
                    key={index}
                    href={`/service/${slug}`}
                    className="blog-item flex flex-col lg:flex-row items-start gap-7 hover:bg-slate-50 p-5 rounded-xl transition-all"
                  >
                    <div className="w-full md:w-1/2">
                      <div className="bg-img w-full overflow-hidden rounded-2xl">
                        <Image
                          width={500}
                          height={300}
                          className="w-full h-full object-cover"
                          src={imageUrl}
                          alt={title || 'Service Image'}
                        />
                      </div>
                    </div>

                    <div className="w-full md:w-1/2">
                      <div className="caption2 py-1 px-3 bg-surface rounded-full inline-block capitalize bg-slate-100">
                        {category || 'Service'}
                      </div>
                      <div className="heading6 mt-3 font-semibold text-xl text-slate-800">
                        {title}
                      </div>
                      <div className="date flex items-center gap-4 mt-3 text-slate-500">
                        <div className="author caption2">
                          By <span className="text-onsurface">{author}</span>
                        </div>
                        {date && (
                          <div className="item-date flex items-center">
                            <span className="ml-1 caption2">{date}</span>
                          </div>
                        )}
                      </div>
                      <div className="body3 text-secondary mt-4 pb-4">
                        {getTextFromHTML(plainTextDesc).slice(0, 180)}...
                      </div>
                      <div className="read font-bold text-blue-600 underline hover:text-blue-800">
                        Read More
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

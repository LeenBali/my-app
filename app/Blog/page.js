"use client";
import React from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    img: "68b65fded4df5bdbe82cc0432a570a6db98d9123-880x400.webp",
    category: "Company News",
    date: "February 19, 2025",
    title: "Cosy Bright Office In Yellow And Grey Colors",
  },
  {
    id: 2,
    img: "77d8bf85e65d732940cd198a346ad9c58e0c8f14-880x400.webp",
    category: "Company News",
    date: "February 19, 2025",
    title: "Traveller Visiting Ice Cave With Amazing Eye-catching Scenes",
  },
  {
    id: 3,
    img: "7598caff59555b339cc5b1b70541bfbfc94c5e5c-880x400.webp",
    category: "Company News",
    date: "February 19, 2025",
    title: "Loft Office With Vintage Decor For Creative Working",
  },
  {
    id: 4,
    img: "3efdc78b5980ebe156da6bb5ebadeb24de4921bb-880x400.webp",
    category: "Company News",
    date: "February 19, 2025",
    title: "Stylish Kitchen And Dining Room With Functional Ideas",
  },
  {
    id: 5,
    img: "882673d75554eac5140729960a8b5805019cebb4-1230x692.webp",
    category: "Company News",
    date: "February 19, 2025",
    title: "Stylish Kitchen And Dining Room With Functional Ideas",
  },
  {
    id: 6,
    img: "09074559789d8fb71114254ee08eec66391f8b67-880x400.webp",
    category: "Company News",
    date: "February 19, 2025",
    title: "Stylish Kitchen And Dining Room With Functional Ideas",
  },
  {
    id: 7,
    img: "be804d89284e1c312c14decc9c1c9129b774d919-1230x692.webp",
    category: "Company News",
    date: "February 19, 2025",
    title: "Stylish Kitchen And Dining Room With Functional Ideas",
  },
  {
    id: 8,
    img: "24692b70a968b02e8d2ca9055a068c6a2b98aecc-880x400.webp",
    category: "Company News",
    date: "February 19, 2025",
    title: "Stylish Kitchen And Dining Room With Functional Ideas",
  },
];

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogPosts.map((item) => (
          <Link key={item.id} href={`/Blog/${item.id}`} className="flex">
            <div className="cardsBlog flex flex-col justify-between w-full rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white overflow-hidden transition-all duration-300 hover:shadow-lg">
              {/* إطار الصورة الموحد */}
              <div className="relative w-full h-48 overflow-hidden bg-gray-100 shrink-0">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  src={item.img}
                  alt={item.title}
                />
              </div>

              {/* محتوى الكارت */}
              <div className="p-6 flex flex-col grow justify-between">
                <div>
                  <div className="flex text-xs gap-2 items-center text-gray-500 dark:text-gray-400 mb-2">
                    <p className="text-sm font-medium">{item.category}</p>
                    <span className="text-gray-300">•</span>
                    <p className="flex items-center gap-1">
                      <CalendarMonthOutlinedIcon style={{ fontSize: "16px" }} />
                      {item.date}
                    </p>
                  </div>

                  <h3 className="font-black text-[15px] leading-snug text-gray-900 dark:text-white line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

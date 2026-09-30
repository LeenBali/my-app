import React from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";

const blog = [
  {
    id: 1,
    img: "/68b65fded4df5bdbe82cc0432a570a6db98d9123-880x400.webp",
    title: "Company News",
    title1: "February 19, 2025",
    title2: "Cosy Bright Office In Yellow And Grey Colors",
    desc: "It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at how to make side projects work and why they’re worthwhile, drawing on lessons learned from our development of the ux companion app.\n\nWhy Integrate Side Projects?\nBeing creative within the constraints of client briefs, budgets and timelines is the norm for most agencies. However, investing in research and development as a true, creative outlet is a powerful addition. In these side projects alone, your team members can pool their expertise to create and shape their own vision — a powerful way to develop motivation, interdisciplinary skills and close relationships.\n\nPeople think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. Building into the identity and culture of an agency can also lead to new client work. These projects act as a road map, showing clients exciting new technologies and ideas that will differentiate you from competitors.",
    img2: "/f26726058fb8afcf1cdf48f956d0e08cb529fec8-3772x2524.webp",
    desc2:
      "How To Make Side Projects Work\nWe’re still working on achieving that perfect balance between commerce and creativity. But we have fresh inspiration on how it’s done from having worked on ux companion. The app gained a popular following in early October, as one of the first native apps to offer a full glossary of user experience terms and theory — but the development process was definitely a learning process.\n\nCommercializing side projects alongside client work isn’t easy. Even if such projects are intended to generate additional revenue streams, they are not directly related to your core business. Those with a more qualitative aim, such as promoting expertise or technological experimentation, are even harder to justify.",
  },
  {
    id: 2,
    img: "/77d8bf85e65d732940cd198a346ad9c58e0c8f14-880x400.webp",
    title: "Company News",
    title1: "February 19, 2025",
    title2: "Traveller Visiting Ice Cave With Amazing Eye-catching Scenes",
    desc: "It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out.",
    img2: "/f26726058fb8afcf1cdf48f956d0e08cb529fec8-3772x2524.webp",
    desc2:
      "How To Make Side Projects Work\nWe’re still working on achieving that perfect balance between commerce and creativity. But we have fresh inspiration on how it’s done from having worked on ux companion.",
  },
  {
    id: 3,
    img: "/7598caff59555b339cc5b1b70541bfbfc94c5e5c-880x400.webp",
    title: "Company News",
    title1: "February 19, 2025",
    title2: "Loft Office With Vintage Decor For Creative Working",
    img2: "/f26726058fb8afcf1cdf48f956d0e08cb529fec8-3772x2524.webp",
    desc: "It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available.",
    desc2:
      "How To Make Side Projects Work\nWe’re still working on achieving that perfect balance between commerce and creativity.",
  },
  {
    id: 4,
    img: "/3efdc78b5980ebe156da6bb5ebadeb24de4921bb-880x400.webp",
    title: "Company News",
    title1: "February 19, 2025",
    title2: "Stylish Kitchen And Dining Room With Functional Ideas",
    desc: "It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available.",
    img2: "/f26726058fb8afcf1cdf48f956d0e08cb529fec8-3772x2524.webp",
    desc2:
      "How To Make Side Projects Work\nWe’re still working on achieving that perfect balance between commerce and creativity.",
  },
];

const blog2 = [
  {
    id: 5,
    img3: "/882673d75554eac5140729960a8b5805019cebb4-1230x692.webp",
    title: "Company News",
    title1: "February 19, 2025",
    title2: "Stylish Kitchen And Dining Room With Functional Ideas",
    img2: "/f26726058fb8afcf1cdf48f956d0e08cb529fec8-3772x2524.webp",
    desc2:
      "How To Make Side Projects Work\nWe’re still working on achieving that perfect balance between commerce and creativity. But we have fresh inspiration on how it’s done from having worked on ux companion.",
  },
  {
    id: 6,
    img3: "/09074559789d8fb71114254ee08eec66391f8b67-880x400.webp",
    title: "Company News",
    title1: "February 19, 2025",
    title2: "Stylish Kitchen And Dining Room With Functional Ideas",
    img2: "/f26726058fb8afcf1cdf48f956d0e08cb529fec8-3772x2524.webp",
    desc2:
      "How To Make Side Projects Work\nWe’re still working on achieving that perfect balance between commerce and creativity.",
  },
  {
    id: 7,
    img3: "/be804d89284e1c312c14decc9c1c9129b774d919-1230x692.webp",
    title: "Company News",
    title1: "February 19, 2025",
    title2: "Stylish Kitchen And Dining Room With Functional Ideas",
    img2: "/f26726058fb8afcf1cdf48f956d0e08cb529fec8-3772x2524.webp",
    desc2:
      "How To Make Side Projects Work\nWe’re still working on achieving that perfect balance between commerce and creativity.",
  },
  {
    id: 8,
    img3: "/24692b70a968b02e8d2ca9055a068c6a2b98aecc-880x400.webp",
    title: "Company News",
    title1: "February 19, 2025",
    title2: "Stylish Kitchen And Dining Room With Functional Ideas",
    img2: "/f26726058fb8afcf1cdf48f956d0e08cb529fec8-3772x2524.webp",
    desc2:
      "How To Make Side Projects Work\nWe’re still working on achieving that perfect balance between commerce and creativity.",
  },
];

const BlogDetailPage = async ({ params }) => {
  const { id } = await params;
  const targetId = Number(id);

  // البحث عن المقال في أي من القائمتين
  const post = blog.find((p) => p.id === targetId);
  const post2 = blog2.find((p) => p.id === targetId);
  const currentPost = post || post2;

  if (!currentPost) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-500 font-medium text-lg">Article not found.</p>
      </div>
    );
  }

  const mainImage = post ? post.img : post2.img3;
  const fullTitle = post
    ? `${post.title2} ${post.title3 || ""}`
    : `${post2.title2} ${post2.title3 || ""}`;

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* 1. Header Information */}
      <div className="space-y-4 mb-8 text-center md:text-left">
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-green-600 font-semibold justify-center md:justify-start">
          <span className="flex items-center gap-1 bg-green-50 px-3 py-1 rounded-full">
            <TagOutlinedIcon style={{ fontSize: "16px" }} />
            {currentPost.title}
          </span>
          <span className="flex items-center gap-1 text-gray-500 font-normal">
            <CalendarMonthOutlinedIcon style={{ fontSize: "16px" }} />
            {currentPost.title1}
          </span>
        </div>

        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-snug">
          {fullTitle}
        </h1>
      </div>

      {/* 2. Main Image */}
      <div className="w-full h-72 md:h-112.5 overflow-hidden rounded-3xl shadow-sm mb-8 bg-gray-100">
        <img
          src={mainImage}
          alt={fullTitle}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 3. Description Section 1 */}
      {post?.desc && (
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8 space-y-4 text-base md:text-lg">
          {post.desc.split("\n\n").map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      )}

      {/* 4. Secondary Image */}
      {currentPost.img2 && (
        <div className="w-full h-64 md:h-100 overflow-hidden rounded-3xl shadow-sm my-8 bg-gray-100">
          <img
            src={currentPost.img2}
            alt="Article secondary highlight"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* 5. Description Section 2 */}
      {currentPost.desc2 && (
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 text-base md:text-lg">
          {currentPost.desc2.split("\n\n").map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      )}
    </article>
  );
};

export default BlogDetailPage;

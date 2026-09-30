"use client";
import Link from "next/link";
import React from "react";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CardActions from "../CardActions";
const cards = [
  {
    id: 1,
    img: "/5d45077fc88810e070d674b28d43813329843942-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: "$1,700.00  ",
    price2: "$1,870.00",
  },
  {
    id: 2,
    img: "/314d4778bb204348e14beac9649ec4c69c2c71c0-500x500.avif",
    title1: "Airbuds",
    title2: "Apple AirPods Max",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: "$1,700.00  ",
    price2: "$1,870.00",
  },
  {
    id: 3,
    img: "/6c9afa13da86391063f3de593cdce2824d60d450-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: "$1,700.00  ",
    price2: "$1,870.00",
  },
  {
    id: 4,
    img: "/38766ca9c29fa255abcfcaa9fd830b60054daf9d-500x500.avif",
    title1: "gadget accessories ",
    title2: "Apple AirPods 3rd",
    rate: 5,
    title3: "In Stock ",
    title4: 39,
    price: "$1,700.00 ",
    price2: "$1,870.00",
  },
  {
    id: 5,
    img: "/480dae813a99d8331778f7a3edbc6cb98512208c-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock  ",
    title4: 39,
    price: "$1,700.00  ",
    price2: "$1,870.00",
  },
  {
    id: 6,
    img: "/9a8a32de3497aa85e021ea4ab5590c8d6d3f4f6f-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: "$1,700.00 ",
    price2: "$1,870.00",
  },
  {
    id: 7,
    img: "/892235772893d349678afcbed13b8173e474dfc0-300x300.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock ",
    title4: 39,
    price: "$1,700.00  ",
    price2: "$1,870.00",
  },
  {
    id: 8,
    img: "/ddf9d80dc53d2f204ee5798ae9240ab108c96ecb-300x300.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: "$1,700.00  ",
    price2: "$1,870.00",
  },
  {
    id: 9,
    img: "/aa9f2fafc6e277a101e3b17bd4fa00b7d99c6b4b-300x300.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: "$1,700.00 ",
    price2: "$1,870.00",
  },
  {
    id: 10,
    img: "/8893fc500c77e1eab4b8e9b9ea59c4c5bb055f95-300x300.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock  ",
    title4: 39,
    price: "$1,700.00 ",
    price2: "$1,870.00",
  },
  {
    id: 11,
    img: "/bdd6d2597360e46e94a86f7f31018a05d91ac68d-300x300.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock ",
    title4: 39,
    price: "$1,700.00",
    price2: "$1,870.00",
  },
  {
    id: 14,
    img: "/3724c13132a5fd68eda2479ae549d55bda7447c7-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: "$1,700.00  ",
    price2: "$1,870.00",
  },
  {
    id: 15,
    img: "/2a75ca8224d0256ac7048b421b82abb95fca0384-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock  ",
    title4: 39,
    price: "$1,700.00  ",
    price2: "$1,870.00",
  },
];
const page = () => {
  return (
    <div
      style={{
        backgroundColor: "#f1f3f8",
        paddingLeft: "40px",
        paddingRight: "40px",
      }}
      className="pb-8"
    >
      <div className="grid grid-cols-5 gap-4 ">
        {cards.map((card) => (
          <div key={card.id}>
            <Link href={`/Shop/${card.id}`}>
              <div className=" mt-8 cardsBlogs rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
                <div
                  className="relative overflow-hidden bg-no-repeat"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  <div>
                    <img
                      className="rounded-t-lg cardsBlogs p-4 card"
                      src={card.img}
                      alt=""
                    />
                    <div className="flex">
                      <h2 className="fire">{card.sale}</h2>
                      {card.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6 text-surface dark:text-white">
                  <div className="text-sm font-medium leading-tight">
                    <p className="mb-2 text-sm font-medium text-gray-400">
                      {card.title1}
                    </p>
                    <p className="font-black text-lg mb-2">{card.title2}</p>
                    <div className="flex mb-2">
                      {Array.from({ length: card.rate }, (_, index) => (
                        <StarIcon
                          key={index}
                          className="text-sm"
                          style={{ color: "#3b9c3c" }}
                        />
                      ))}
                    </div>
                    <div className="flex gap-5">
                      <p className="mb-2">{card.title3}</p>
                      <p>{card.title4}</p>
                    </div>
                    <div className="flex gap-5 mb-2">
                      <p>{card.price}</p>
                      <p className="line-through text-gray-400">
                        {card.price2}
                      </p>
                    </div>
                    <CardActions card={card} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

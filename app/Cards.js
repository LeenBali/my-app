"use client";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import StarIcon from "@mui/icons-material/Star";
import React, { useState } from "react";
import Link from "next/link";
import CardActions from "./CardActions.js";
import { useStore } from "./context/StoreContext";

const cards = [
  {
    id: 1,
    img: "9d449761da7e68b17b5fbd5aac5647d40b96903d-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 2,
    img: "c3bf5eaa474e9b5220b6839d6808d4a7022ecde6-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods Max",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 3,
    img: "c6e0da93e884e6ab9fc7b2a884c6d28ad7f2020e-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,
    quan: 1,
  },
  {
    id: 4,
    img: "480dae813a99d8331778f7a3edbc6cb98512208c-500x500.avif",
    title1: "gadget accessories ",
    title2: "Apple AirPods 3rd",
    rate: 5,
    title3: "In Stock ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 5,
    img: "b613899aa4e420139f6bf4fb5359e9b8ef8099b1-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock  ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 6,
    img: "312a32bc3b5017f870ef43b0af1bc372cd1ba5f2-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 7,
    img: "6c9afa13da86391063f3de593cdce2824d60d450-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 8,
    img: "38766ca9c29fa255abcfcaa9fd830b60054daf9d-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 9,
    img: "6a182188c90b312b1b3951c1d5b9626ef854b10e-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 10,
    img: "a4d5751b9772189b6536fd7720a885cb27be8c6b-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock  ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 11,
    img: "c2c857cae8cefda07a357637f3c90b239cd1ae73-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 12,
    img: "aa9f2fafc6e277a101e3b17bd4fa00b7d99c6b4b-300x300.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock  ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,
    quan: 1,
  },
  {
    id: 13,
    img: "bdd6d2597360e46e94a86f7f31018a05d91ac68d-300x300.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 14,
    img: "3724c13132a5fd68eda2479ae549d55bda7447c7-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 15,
    img: "2a75ca8224d0256ac7048b421b82abb95fca0384-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock  ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
];
const Appliances = [
  {
    id: 16,
    img: "1a4548882b7288ab4e9eebd38123cb18e704c701-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock  ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 17,
    img: "5d45077fc88810e070d674b28d43813329843942-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock  ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 18,
    img: "15aa3197f55aa3304e5620df0879c8446e76a879-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock  ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 19,
    img: "c65973cffe7b5af19df8fba550f3cc37592092d1-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock  ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 20,
    img: "6cb8c1a2f06c3fac6ed79281b2bb066f83a06902-300x300.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock  ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 21,
    img: "18ffedbb1b22ca763c0aebc79dac0955751b4585-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock  ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 22,
    img: "77926f1aa5e872be86774be4a66f9a646eae4f4f-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock  ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 23,
    img: "c78e6f0ce5544a94ff662ca34dd525177d35d6ba-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock  ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 24,
    img: "9a8a32de3497aa85e021ea4ab5590c8d6d3f4f6f-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock  ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 25,
    img: "892235772893d349678afcbed13b8173e474dfc0-300x300.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock  ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 26,
    img: "ddf9d80dc53d2f204ee5798ae9240ab108c96ecb-300x300.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock  ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
  {
    id: 27,
    img: "ecd7cfccf1809e5dadb2455bf3c8a3a6c4d3e990-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock  ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
];
const Refrigerators = [
  {
    id: 28,
    img: "3cfee8c878bf012e0b5c830b5d11168974ac4aa8-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock  ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,
    quan: 1,
  },
  {
    id: 29,
    img: "314d4778bb204348e14beac9649ec4c69c2c71c0-500x500.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock  ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,

    quan: 1,
  },
];
const Others = [
  {
    id: 30,
    img: "8893fc500c77e1eab4b8e9b9ea59c4c5bb055f95-300x300.avif",
    title1: "gadget accessories",
    title2: "Apple AirPods 3rd ",
    rate: 5,
    title3: "In Stock  ",
    title4: 39,
    price: 1700.0,
    price2: 1870.0,
    quan: 1,
  },
];

const Cards = () => {
  const [but, setbut] = useState("Gadget");
  const { cart, removeFromCart } = useStore();

  const total = cart.reduce((item, index) => {
    const price = Number(index.price) || 0;
    const quantity = Number(index.quan) || 1; // استخدام 1 افتراضياً إذا كانت quan غير محددة
    return item + price * quantity;
  }, 0);

  return (
    <div>
      {/* buttons */}
      <div className="mt-8 flex gap-5 ms-12">
        <button
          type="button"
          className=" inline-block rounded-4xl border-2 w-36 px-6 pb-2 pt-2.5 text-sm font-black uppercase leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          style={{
            color: but === "Gadget" ? "white" : "",
            backgroundColor:
              but === "Gadget" ? "#3b9c3c" : "oklch(96.2% .044 156.743)",
          }}
          onClick={() => setbut("Gadget")}
        >
          Gadget
        </button>
        <button
          type="button"
          className="inline-block rounded-4xl border-2 w-36 px-6 pb-2 pt-2.5 text-sm font-black uppercase leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          style={{
            color: but === "Appliances" ? "white" : "",
            backgroundColor:
              but === "Appliances" ? "#3b9c3c" : "oklch(96.2% .044 156.743)",
          }}
          onClick={() => setbut("Appliances")}
        >
          Appliances
        </button>
        <button
          type="button"
          className="inline-block rounded-4xl border-2 w-44 px-6 pb-2 pt-2.5 text-sm font-black uppercase leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          style={{
            color: but === "Refrigerators" ? "white" : "",
            backgroundColor:
              but === "Refrigerators" ? "#3b9c3c" : "oklch(96.2% .044 156.743)",
          }}
          onClick={() => setbut("Refrigerators")}
        >
          Refrigerators
        </button>
        <button
          type="button"
          className="inline-block rounded-4xl border-2 w-36  px-6 pb-2 pt-2.5 text-sm font-black uppercase leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          style={{
            color: but === "Others" ? "white" : "",
            backgroundColor:
              but === "Others" ? "#3b9c3c" : "oklch(96.2% .044 156.743)",
          }}
          onClick={() => setbut("Others")}
        >
          Others
        </button>
      </div>

      {/* cards */}
      {but === "Gadget" && (
        <div>
          <div className="grid grid-cols-5 gap-4 ms-12 me-12">
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
                              style={{ color: "#3b9c3c", fontSize: "14px" }}
                            />
                          ))}
                        </div>
                        <div className="flex gap-5">
                          <p className="mb-2">{card.title3}</p>
                          <p>{card.title4}</p>
                        </div>
                        <div className="flex gap-5 mb-2">
                          <p className="font-bold text-lg">${card.price}</p>
                          <p className="line-through text-gray-400">
                            ${card.price2}
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
      )}

      {but === "Appliances" && (
        <div>
          <div className="grid grid-cols-5 gap-4 ms-12 me-12">
            {Appliances.map((card) => (
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
                          <CardActions card={card} />
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
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {but === "Refrigerators" && (
        <div>
          <div className="grid grid-cols-5 gap-4 ms-12 me-12">
            {Refrigerators.map((card) => (
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
                          <h2 className="fire sale">{card.sale}</h2>
                          {card.icon}
                          <CardActions card={card} />
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
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {but === "Others" && (
        <div>
          <div className="grid grid-cols-5 gap-4 me-12 ms-12">
            {Others.map((card) => (
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
                          <CardActions card={card} />
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
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;

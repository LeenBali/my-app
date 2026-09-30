"use client";

import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton, Button } from "@mui/material";

import React, { useState } from "react";
import Link from "next/link";
import { useStore } from "../context/StoreContext.js";
import CardActions from "../CardActions";

const cards = [
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
    id: 16,
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
    id: 1,
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

  const { addToCart, addToWishlist } = useStore();

  const handleAddToCart = (e, card) => {
    e.preventDefault();
    if (addToCart) addToCart(card);
  };

  const handleWishlist = (e, card) => {
    e.preventDefault();
    if (addToWishlist) addToWishlist(card);
  };

  return (
    <div
      className="grid grid-cols-5 gap-4 "
      style={{
        backgroundColor: "#f1f3f8",
        paddingLeft: "40px",
        paddingRight: "40px",
      }}
    >
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
                    <p className="line-through text-gray-400">{card.price2}</p>
                  </div>
                  <CardActions card={card} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cards;

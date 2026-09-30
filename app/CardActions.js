"use client";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useStore } from "./context/StoreContext";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import Link from "next/link";
const CardActions = ({ card }) => {
  const { addToCart, wishlist, toggleWishlist } = useStore();
  const isFav = wishlist.some((item) => item.id === card.id);

  return (
    <div className="flex items-center gap-3 mt-4">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          toggleWishlist(card);
        }}
      >
        {isFav ? (
          <FavoriteIcon className="text-red-600 text-2xl" />
        ) : (
          <FavoriteBorderIcon className="text-gray-500 text-2xl" />
        )}
      </button>

      <button
        type="button"
        className="rounded-2xl  ms-2 px-6 py-2.5 text-xs font-medium uppercase text-white shadow-md transition duration-150 hover:bg-green-800"
        style={{ backgroundColor: "#063c28cc" }}
        onClick={(e) => {
          e.preventDefault();
          addToCart(card);
        }}
      >
        Add To Cart
      </button>

      <WhatshotIcon className="fire ms-3" />
    </div>
  );
};

export default CardActions;

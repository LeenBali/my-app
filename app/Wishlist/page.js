"use client";
import React from "react";
import { useStore } from "../context/StoreContext";
import CardActions from "../CardActions";

export default function WishlistPage() {
  const { wishlist } = useStore();

  return (
    <div className="p-8 container mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">قائمة المفضلة فارغة.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {wishlist.map((card) => (
            <div
              key={card.id}
              className="cardsBlog rounded-lg bg-white shadow-md p-4 flex flex-col justify-between border"
            >
              <div>
                {/* صورة المنتج */}
                <img
                  className="w-full h-48 object-contain p-2"
                  src={card.img}
                  alt={card.title2}
                />

                {/* اسم ونوع المنتج */}
                <p className="text-xs text-gray-400 mt-2">{card.title1}</p>
                <h3 className="font-black text-lg mb-2">{card.title2}</h3>

                {/* السعر */}
                <div className="flex gap-3 font-bold my-2">
                  <span className="text-green-700">${card.price}</span>
                  {card.price2 && (
                    <span className="line-through text-gray-400">
                      ${card.price2}
                    </span>
                  )}
                </div>
              </div>

              {/* أزرار التفاعل */}
              <div className="mt-4 pt-2 border-t">
                <CardActions card={card} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

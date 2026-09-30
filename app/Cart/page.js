"use client";
import React from "react";
import { useStore } from "../context/StoreContext";

export default function CartPage() {
  const { cart, removeFromCart } = useStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quan, 0);

  return (
    <div className="p-8 container mx-auto">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">سلتك فارغة حالياً</p>
      ) : (
        <div className="cont flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="items flex items-center justify-between p-4 border rounded-xl shadow-sm bg-white"
            >
              {/* صورة المنتج */}
              <img
                src={item.img}
                className="w-20 h-20 object-contain"
                alt={item.title2}
              />

              {/* اسم المنتج */}
              <h2 className="font-bold text-gray-800">
                {item.title2 || item.title1}
              </h2>

              {/* الكمية */}
              <p className="text-sm text-gray-500">الكمية: {item.quan}</p>

              {/* السعر */}
              <h2 className="font-bold text-green-700">
                ${item.price * item.quan}
              </h2>

              {/* زر الحذف بنفس ستايلك */}
              <button
                className="bg-red-700 text-white px-4 py-1.5 rounded-xl text-sm transition hover:bg-red-800"
                onClick={() => removeFromCart(item)}
              >
                Delete
              </button>
            </div>
          ))}

          {/* الإجمالي */}
          <div className="mt-6 pt-4 border-t flex justify-between items-center">
            <span className="font-bold text-xl">Total Price:</span>
            <span className="font-bold text-2xl text-green-800">${total}</span>
          </div>
        </div>
      )}
    </div>
  );
}

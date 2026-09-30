"use client";
import React from "react";

import { usePathname } from "next/navigation";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useStore } from "./context/StoreContext";
import Link from "next/link";

export default function Header() {
  const { cart, wishlist } = useStore();
  const pathname = usePathname();

  // قائمة بعناصر الملاحة للتخلص من التكرار
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/Shop" },
    { name: "Blog", href: "/Blog" },
    { name: "Hot Deal", href: "/HotDeal" },
  ];

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <h1 className="text-2xl font-black tracking-wider uppercase font-sans">
        Shopcar<span style={{ color: "#3b9c3c" }}>t</span>
      </h1>

      <nav className="flex gap-6 font-bold">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.name} href={link.href}>
              <span
                className={`cursor-pointer transition-colors ${
                  isActive ? "text-[#3b9c3c]" : "hover:text-[#3b9c3c]"
                }`}
              >
                {link.name}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-6">
        <Link href="/Wishlist" className="relative flex items-center">
          <FavoriteBorderOutlinedIcon className="text-gray-700 hover:text-red-500 text-3xl" />
          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {wishlist.length}
            </span>
          )}
        </Link>

        <Link href="/Cart" className="relative flex items-center">
          <ShoppingCartOutlinedIcon className="text-gray-600 hover:text-green-700 text-3xl" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}

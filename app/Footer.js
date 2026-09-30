"use client";
import React from "react";
// استيراد الأيقونات المطلوبة
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined"; // بديل لأيقونة إنشوت/انستغرام
import YouTubeIcon from "@mui/icons-material/YouTube";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
  return (
    <footer className="  pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Top 4 Columns (Contact Info) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
          {/* Column 1: Visit Us */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full  flex items-center justify-center shrink-0">
              <LocationOnOutlinedIcon fontSize="medium" />
            </div>
            <div>
              <h4 className=" font-semibold text-base">Visit Us</h4>
              <p className="text-sm text-gray-400 mt-0.5">New Orleans, USA</p>
            </div>
          </div>

          {/* Column 2: Call Us */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full  flex items-center justify-center shrink-0">
              <LocalPhoneRoundedIcon fontSize="medium" />
            </div>
            <div>
              <h4 className=" font-semibold text-base">Call Us</h4>
              <p className="text-sm text-gray-400 mt-0.5">+12 958 648 597</p>
            </div>
          </div>

          {/* Column 3: Working Hours */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full  flex items-center justify-center shrink-0">
              <AccessTimeOutlinedIcon fontSize="medium" />
            </div>
            <div>
              <h4 className=" font-semibold text-base">Working Hours</h4>
              <p className="text-sm text-gray-400 mt-0.5">
                Mon - Sat: 10:00 AM - 7:00 PM
              </p>
            </div>
          </div>

          {/* Column 4: Email Us */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full  flex items-center justify-center shrink-0">
              <EmailOutlinedIcon fontSize="medium" />
            </div>
            <div>
              <h4 className=" font-semibold text-base">Email Us</h4>
              <p className="text-sm text-gray-400 mt-0.5">Shopcart@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Divider 1 */}
        <hr className="border-gray-800 my-8" />

        {/* Section 2: Main Footer Content (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-4">
          {/* Column 1: About & Social */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold  tracking-wide">Shopcart</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Discover curated furniture collections at Shopcart, blending style
              and comfort to elevate your living spaces.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 text-gray-300 hover:bg-emerald-600  flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon fontSize="small" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 text-gray-300 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon fontSize="small" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 text-gray-300 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon fontSize="small" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 text-gray-300 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="InShot"
              >
                <CameraAltOutlinedIcon fontSize="small" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 text-gray-300 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <YouTubeIcon fontSize="small" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className=" font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h4 className=" font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Mobiles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Appliances
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Smartphones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Air Conditioners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Washing Machine
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Kitchen Appliances
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  gadget accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className=" font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Subscribe to our newsletter to receive updates and exclusive
              offers.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full  border border-gray-700  placeholder-gray-500 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors pr-12"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5  px-3 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Subscribe"
                >
                  <SendIcon fontSize="small" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Divider */}
        <hr className="border-gray-800 mt-10 mb-6" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          © 2026 Shopcart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

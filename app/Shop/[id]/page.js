import React from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import QrCodeIcon from "@mui/icons-material/QrCode";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShareIcon from "@mui/icons-material/Share";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import Desc from "@/app/Blog/Desc";

const cards = [
  {
    id: 1,
    img: "/9d449761da7e68b17b5fbd5aac5647d40b96903d-500x500.avif",
    title1: "Apple AirPods 3rd generation with Charging Case",
    title2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde illum expedita dolores aut nostrum, quidem placeat laborum nemo, beatae perspiciatis quae, sint tempore aliquid molestiae consequatur eum earum.",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: "$1,700.00",
    price2: "$1,870.00",
  },
  {
    id: 2,
    img: "/c3bf5eaa474e9b5220b6839d6808d4a7022ecde6-500x500.avif",
    title1: "Apple AirPods 3rd generation with Charging Case",
    title2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde illum expedita dolores aut nostrum, quidem placeat laborum nemo, beatae perspiciatis quae, sint tempore aliquid molestiae consequatur eum earum.",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: "$1,700.00",
    price2: "$1,870.00",
  },
  {
    id: 3,
    img: "/c6e0da93e884e6ab9fc7b2a884c6d28ad7f2020e-500x500.avif",
    title1: "Apple AirPods 3rd generation with Charging Case",
    title2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde illum expedita dolores aut nostrum, quidem placeat laborum nemo, beatae perspiciatis quae, sint tempore aliquid molestiae consequatur eum earum.",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: "$1,700.00",
    price2: "$1,870.00",
  },
  {
    id: 4,
    img: "/480dae813a99d8331778f7a3edbc6cb98512208c-500x500.avif",
    title1: "Apple AirPods 3rd generation with Charging Case",
    title2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde illum expedita dolores aut nostrum, quidem placeat laborum nemo, beatae perspiciatis quae, sint tempore aliquid molestiae consequatur eum earum.",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: "$1,700.00",
    price2: "$1,870.00",
  },
  {
    id: 5,
    img: "/b613899aa4e420139f6bf4fb5359e9b8ef8099b1-500x500.avif",
    title1: "Apple AirPods 3rd generation with Charging Case",
    title2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde illum expedita dolores aut nostrum, quidem placeat laborum nemo, beatae perspiciatis quae, sint tempore aliquid molestiae consequatur eum earum.",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: "$1,700.00",
    price2: "$1,870.00",
  },
  {
    id: 6,
    img: "/312a32bc3b5017f870ef43b0af1bc372cd1ba5f2-500x500.avif",
    title1: "Apple AirPods 3rd generation with Charging Case",
    title2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde illum expedita dolores aut nostrum, quidem placeat laborum nemo, beatae perspiciatis quae, sint tempore aliquid molestiae consequatur eum earum.",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: "$1,700.00",
    price2: "$1,870.00",
  },
  {
    id: 7,
    img: "/6c9afa13da86391063f3de593cdce2824d60d450-500x500.avif",
    title1: "Apple AirPods 3rd generation with Charging Case",
    title2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde illum expedita dolores aut nostrum, quidem placeat laborum nemo, beatae perspiciatis quae, sint tempore aliquid molestiae consequatur eum earum.",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: "$1,700.00",
    price2: "$1,870.00",
  },
  {
    id: 8,
    img: "/38766ca9c29fa255abcfcaa9fd830b60054daf9d-500x500.avif",
    title1: "Apple AirPods 3rd generation with Charging Case",
    title2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde illum expedita dolores aut nostrum, quidem placeat laborum nemo, beatae perspiciatis quae, sint tempore aliquid molestiae consequatur eum earum.",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: "$1,700.00",
    price2: "$1,870.00",
  },
  {
    id: 9,
    img: "/6a182188c90b312b1b3951c1d5b9626ef854b10e-500x500.avif",
    title1: "Apple AirPods 3rd generation with Charging Case",
    title2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde illum expedita dolores aut nostrum, quidem placeat laborum nemo, beatae perspiciatis quae, sint tempore aliquid molestiae consequatur eum earum.",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: "$1,700.00",
    price2: "$1,870.00",
  },
  {
    id: 10,
    img: "/a4d5751b9772189b6536fd7720a885cb27be8c6b-500x500.avif",
    title1: "Apple AirPods 3rd generation with Charging Case",
    title2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde illum expedita dolores aut nostrum, quidem placeat laborum nemo, beatae perspiciatis quae, sint tempore aliquid molestiae consequatur eum earum.",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: "$1,700.00",
    price2: "$1,870.00",
  },
  {
    id: 11,
    img: "/c2c857cae8cefda07a357637f3c90b239cd1ae73-500x500.avif",
    title1: "Apple AirPods 3rd generation with Charging Case",
    title2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde illum expedita dolores aut nostrum, quidem placeat laborum nemo, beatae perspiciatis quae, sint tempore aliquid molestiae consequatur eum earum.",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: "$1,700.00",
    price2: "$1,870.00",
  },
  {
    id: 12,
    img: "/aa9f2fafc6e277a101e3b17bd4fa00b7d99c6b4b-300x300.avif",
    title1: "Apple AirPods 3rd generation with Charging Case",
    title2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde illum expedita dolores aut nostrum, quidem placeat laborum nemo, beatae perspiciatis quae, sint tempore aliquid molestiae consequatur eum earum.",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: "$1,700.00",
    price2: "$1,870.00",
  },
  {
    id: 13,
    img: "/bdd6d2597360e46e94a86f7f31018a05d91ac68d-300x300.avif",
    title1: "Apple AirPods 3rd generation with Charging Case",
    title2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde illum expedita dolores aut nostrum, quidem placeat laborum nemo, beatae perspiciatis quae, sint tempore aliquid molestiae consequatur eum earum.",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: "$1,700.00",
    price2: "$1,870.00",
  },
  {
    id: 14,
    img: "/3724c13132a5fd68eda2479ae549d55bda7447c7-500x500.avif",
    title1: "Apple AirPods 3rd generation with Charging Case",
    title2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde illum expedita dolores aut nostrum, quidem placeat laborum nemo, beatae perspiciatis quae, sint tempore aliquid molestiae consequatur eum earum.",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: "$1,700.00",
    price2: "$1,870.00",
  },
  {
    id: 15,
    img: "/2a75ca8224d0256ac7048b421b82abb95fca0384-500x500.avif",
    title1: "Apple AirPods 3rd generation with Charging Case",
    title2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde illum expedita dolores aut nostrum, quidem placeat laborum nemo, beatae perspiciatis quae, sint tempore aliquid molestiae consequatur eum earum.",
    rate: 5,
    title3: "In Stock",
    title4: 39,
    price: "$1,700.00",
    price2: "$1,870.00",
  },
];

const Cards = async ({ params }) => {
  const { id } = await params;
  const card = cards.find((p) => p.id === Number(id));

  if (!card) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-gray-500 text-lg font-medium">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* قسم الصورة الرئيسي */}
        <div className="w-full bg-gray-50/80 rounded-3xl p-6 sm:p-10 border border-gray-100 flex items-center justify-center shadow-sm">
          <img
            src={card.img}
            alt={card.title1}
            className="w-full max-w-md h-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* تفاصيل المنتج */}
        <div className="flex flex-col space-y-6">
          <div>
            <h3 className=" sm:text-3xl font-extrabold text-gray-900 leading-snug">
              {card.title1}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              {card.title2}
            </p>
          </div>

          {/* التقييم */}
          <div className="flex items-center gap-1">
            {Array.from({ length: card.rate }, (_, index) => (
              <StarIcon
                key={index}
                className="text-amber-400"
                fontSize="small"
              />
            ))}
            <span className="text-xs text-gray-400 font-medium ml-2">
              (5.0)
            </span>
          </div>

          {/* السعر والحالة */}
          <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-4">
            <span className="text-xl font-extrabold text-gray-900">
              {card.price}
            </span>
            {card.price2 && (
              <span className="text-lg text-gray-400 line-through font-medium">
                {card.price2}
              </span>
            )}
            <span className="ml-auto px-3 py-1 bg-emerald-50 text-emerald-700 font-semibold text-xs rounded-full border border-emerald-200">
              {card.title3 || "In Stock"}
            </span>
          </div>

          {/* أزرار الإضافة للسلة والمفضلة */}
          <div className="flex items-center gap-4 pt-2">
            <button className="flex-1 bg-emerald-900 hover:bg-emerald-950 text-white font-semibold py-3.5 px-6 rounded-2xl transition-all shadow-md active:scale-95 text-sm sm:text-base">
              Add to Cart
            </button>
            <button className="p-3.5 border border-gray-200 rounded-2xl text-gray-600 hover:text-red-500 hover:bg-red-50 hover:border-red-100 transition-all shadow-sm">
              <FavoriteBorderIcon fontSize="medium" />
            </button>
          </div>

          {/* خيارات المساعدة والمقارنة */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-gray-100 text-xs text-gray-600 font-medium">
            <button className="flex items-center justify-center gap-1.5 p-2 rounded-xl hover:bg-gray-50 transition-colors">
              <QrCodeIcon fontSize="small" className="text-gray-500" />
              <span>Compare</span>
            </button>
            <button className="flex items-center justify-center gap-1.5 p-2 rounded-xl hover:bg-gray-50 transition-colors">
              <HelpOutlineIcon fontSize="small" className="text-gray-500" />
              <span>Ask Question</span>
            </button>
            <button className="flex items-center justify-center gap-1.5 p-2 rounded-xl hover:bg-gray-50 transition-colors">
              <LocalShippingOutlinedIcon
                fontSize="small"
                className="text-gray-500"
              />
              <span>Delivery</span>
            </button>
            <button className="flex items-center justify-center gap-1.5 p-2 rounded-xl hover:bg-gray-50 transition-colors">
              <ShareIcon fontSize="small" className="text-gray-500" />
              <span>Share</span>
            </button>
          </div>

          {/* معلومات الشحن والاسترجاع */}
          <div className="bg-orange-50/40 border border-orange-100/70 rounded-2xl p-4 space-y-3">
            <div className="flex items-start gap-3">
              <LocalShippingOutlinedIcon className="text-orange-500 mt-0.5" />
              <div>
                <p className="font-bold text-gray-900 text-sm">Free Delivery</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Enter your Postal code for Delivery Availability.
                </p>
              </div>
            </div>

            <div className="border-t border-orange-100/60 pt-3 flex items-start gap-3">
              <KeyboardReturnIcon className="text-orange-500 mt-0.5" />
              <div>
                <p className="font-bold text-gray-900 text-sm">
                  Return Delivery
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Free 30 days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* قسم المراجعات والوصف السفلي */}
      <div className="mt-12">
        <Desc rate={card.rate} card={card} />
      </div>
    </div>
  );
};

export default Cards;

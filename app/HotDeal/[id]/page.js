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
const page = async ({ params }) => {
  const { id } = await params;
  const card = cards.find((p) => p.id === Number(id));
  return (
    <div>
      <div className="flex gap-9 mt-10 ">
        <div className="border-2 pt-8">
          <img src={card.img} className="w-2xl" />
        </div>
        <div>
          <p className="text-xl font-black pb-2">{card.title1}</p>
          <p className="pb-2">{card.title2}</p>

          {Array.from({ length: card.rate }, (_, index) => (
            <StarIcon
              key={index}
              className="text-sm "
              style={{ color: "#3b9c3c" }}
            />
          ))}

          <div>
            <div className="flex pb-5 mt-5 pt-5 items-center border-t-2">
              <p className="text-2xl font-bold pe-6">{card.price}</p>
              <p className="text-xl font-medium line-through">{card.price2}</p>
              <div>
                <button>In Stock</button>
              </div>
            </div>
            <div className="flex items-center gap-7 mb-2">
              <button
                style={{ backgroundColor: " #063c28cc" }}
                className="text-white w-full p-2 rounded-2xl "
              >
                Add to Cart
              </button>
              <div className="social">
                <FavoriteBorderIcon />
              </div>
            </div>
          </div>
          <div className="flex justify-evenly pt-5">
            <div className="flex">
              <QrCodeIcon />
              <p>Compare color</p>
            </div>
            <div className="flex">
              <HelpOutlineIcon />
              Ask a question
            </div>
            <div className="flex">
              <LocalShippingOutlinedIcon />
              <p>Delivery & Return</p>
            </div>
            <div className="flex">
              <ShareIcon />
              <p>Share</p>
            </div>
          </div>
          <div className="social mt-5 p-2">
            <div className="flex items-center gap-4 mb-3 ">
              <LocalShippingOutlinedIcon style={{ color: "#fa6400" }} />
              <div>
                <p className="font-black">Free Delivery</p>
                <p>Enter your Postal code for Delivey Availability.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <KeyboardReturnIcon style={{ color: "#fa6400" }} />
              <div>
                <p className="font-black"> Return Delivery</p>
                <p>Free 30days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Desc rate={card.rate} card={card} />
    </div>
  );
};

export default page;

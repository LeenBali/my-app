"use client";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import Cards from "./Cards";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <div className="flex items-center bg justify-around ">
        <div className="ms-10">
          <h1 className="pb-5 text-3xl font-black">Grab Upto 50% Off on</h1>
          <h1 className="pb-5 text-3xl font-black"> Selected headphone</h1>
          <button
            type="button"
            className="inline-block rounded  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            style={{ background: "#063d29" }}
          >
            Buy Now
          </button>
        </div>
        <div>
          <img src="/banner_1 (2).jpg.webp" style={{ width: "025rem" }} />
        </div>
      </div>

      <Cards />
      {/* Popular Categories */}
      <div className="cardsBlog mt-20 hover:border-inherit">
        <h1
          style={{ borderBottom: "1px solid rgb(218, 218, 218)" }}
          className="p-4 ms-7 me-7 font-bold text-2xl "
        >
          Popular Categories
        </h1>
        <div className="flex justify-around mt-7 mb-7">
          <div
            className="flex items-center gap-5"
            style={{ background: "#f8f8fb", padding: "12px", width: "347px " }}
          >
            <img
              className="w-18  imgsCategories"
              src="e6e530baa444f7804472a5d905288ebe2e7949bd-86x88.webp"
            />
            <div>
              <h1 className="font-bold">Kitchen Appliances</h1>
              <h1>(2) items Available</h1>
            </div>
          </div>
          <div
            className="flex items-center gap-5"
            style={{ background: "#f8f8fb", padding: "12px", width: "347px " }}
          >
            <img
              src="e2530cfbacaec5045f89ae3b5b2af09aedfa3076-96x69.webp"
              className="w-18  imgsCategories"
            />
            <div>
              <h1 className="font-bold">Television</h1>
              <h1>(2) items Available</h1>
            </div>
          </div>
          <div
            className="flex items-center gap-5"
            style={{
              background: "#f8f8fb",
              padding: "12px",
              width: "278px ",
              padding: "12px",
              width: "347px ",
            }}
          >
            <img
              src="99fb797ab1bc968905206e5392bee9148da1949f-75x86.webp"
              className="w-18 imgsCategories"
            />
            <div>
              <h1 className="font-bold">Refrigerators</h1>
              <h1>(1) items Available</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-around mb-7">
          <div
            className="flex items-center gap-5"
            style={{ background: "#f8f8fb", padding: "12px", width: "347px " }}
          >
            <img
              src="ead62e0d6640af63e61ef6cac089984b43d7adbd-84x81.webp"
              className="w-18 imgsCategories"
            />
            <div>
              <h1 className="font-bold">Washing Machine</h1>
              <h1>(2) items Available</h1>
            </div>
          </div>
          <div
            className="flex items-center gap-5"
            style={{ background: "#f8f8fb", padding: "12px", width: "347px " }}
          >
            <img
              src="1e95bfb91b8ed192bd9aeaa9e5e4cf2af230b070-70x72.webp"
              className="w-18 imgsCategories"
            />
            <div>
              <h1 className="font-bold"> Tablets</h1>
              <h1>(0) items Available</h1>
            </div>
          </div>
          <div
            className="flex items-center gap-5"
            style={{ background: "#f8f8fb", padding: "12px", width: "347px " }}
          >
            <img
              src="cca91b3d00316694d678a37e95ce3b7c654fdb66-114x117.webp"
              className="w-18 imgsCategories"
            />
            <div>
              <h1 className="font-bold">gadget accessories</h1>
              <h1>(14) items Available</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Popular Categories */}
      {/* Brands */}
      <div style={{ background: "#f8f8fb" }} className="mt-20">
        <h1 className="text-2xl font-bold p-8">Shop By Brands</h1>
        <div className="flex justify-around ps-4 pe-4">
          <img
            src="ef96bf51abc4013b2a16b3462d16615f6ad05cc5-400x300.webp"
            style={{ width: "11%", height: "72px" }}
            className="imgs"
          />
          <img
            src="9592e8e8435bb86138e1ce1b62dcd290d0ccf595-3840x2160.webp"
            style={{
              width: "11%",
              height: "72px",
              backgroundColor: "white",
              padding: "6px",
            }}
            className="imgs"
          />
          <img
            src="bcb3220b05dedafc17cd1a1531ccec1abcdfbd75-920x920.webp"
            style={{ width: "11%", height: "72px" }}
            className="imgs"
          />
          <img
            src="ea6acb18a422942055cf6800b4c325229cf0295b-370x220.webp"
            style={{ width: "11%", height: "72px", backgroundColor: "white" }}
            className="imgs"
          />
          <img
            src="14f3a9c04f417f3f14faf2c27fedd98374154d0b-345x146.png"
            style={{ width: "11%", height: "72px", padding: "6px" }}
            className="imgs"
          />
          <img
            src="77af7df4b4e9b3500115d1abfd120c0180f047fe-300x168.webp"
            style={{ width: "11%", height: "72px" }}
            className="imgs"
          />
          <img
            src="fe6794adfa6d3b51808b7715a9d443e4e3850413-900x343.png"
            style={{ width: "11%", height: "72px", backgroundColor: "white" }}
            className="imgs"
          />
          <img
            src="ad15201b92bf23db004cc7da63447c7df87367d9-3000x2000.webp"
            style={{ width: "11%", height: "72px", backgroundColor: "white" }}
            className="imgs"
          />
        </div>
        <div className="flex items-center justify-around p-9 brands">
          <span className="flex gap-2 iconBrand">
            <LocalShippingOutlinedIcon className="text-5xl ic " />
            <div>
              <p className="font-bold">Free Delivery</p>
              <p className="text-sm">Free shipping over $100</p>
            </div>
          </span>
          <span className="flex gap-2 iconBrand">
            <CachedOutlinedIcon className="text-5xl  ic" />
            <div>
              <p className="font-bold">Free Return</p>
              <p className="text-sm">Free shipping over $100</p>
            </div>
          </span>
          <span className="flex gap-2 iconBrand">
            <SupportAgentOutlinedIcon className="text-5xl ic" />
            <div>
              <p className="font-bold">Customer Support</p>
              <p className="text-sm">Free shipping over $100</p>
            </div>
          </span>
          <span className="flex gap-2 iconBrand">
            <VerifiedUserOutlinedIcon className="text-5xl ic " />
            <div>
              <p className="font-bold">Money Back guarantee</p>
              <p className="text-sm">Free shipping over $100</p>
            </div>
          </span>
        </div>
      </div>
      {/* Brands */}
    </div>
  );
};

export default Home;

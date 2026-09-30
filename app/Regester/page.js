"use client";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Link from "next/link";
const page = () => {
  const [input, setinput] = useState("");
  const [pass, setpass] = useState("");
  const [visib, setvisb] = useState(false);

  return (
    <div>
      <div className="social text-center p-8">
        <h1 className="text-2xl font-bold  ">Rgister</h1>

        <div className=" mt-7 ">
          <p className="mt-7">User Account</p>
          <input
            type="text"
            placeholder="User account"
            className="border-2 w-xl p-2 rounded-xl mb-7"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />{" "}
          <p className="">Email Address</p>
          <input
            type="email"
            placeholder="Email Address"
            className="border-2 w-xl p-2 rounded-xl"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
        </div>
        <div className="mt-7 relative z-10 ">
          <p>Password</p>
          <div>
            <input
              type={visib ? "text" : "password"}
              placeholder="PassWord"
              className="border-2 w-xl p-2 rounded-xl"
              value={pass}
              onChange={(e) => setpass(e.target.value)}
            />
            <button type="button" onClick={() => setvisb(!visib)}>
              {visib ? (
                <VisibilityIcon className="inputs" />
              ) : (
                <VisibilityOffIcon className="inputs" />
              )}
            </button>
            <p className="mt-7">Confirm the password</p>
            <input
              type={visib ? "text" : "password"}
              placeholder="Confirm the password"
              className="border-2 w-xl p-2 rounded-xl"
              value={pass}
              onChange={(e) => setpass(e.target.value)}
            />
            <button type="button" onClick={() => setvisb(!visib)}>
              {visib ? (
                <VisibilityIcon className="inputs" />
              ) : (
                <VisibilityOffIcon className="inputs" />
              )}
            </button>
          </div>
        </div>

        <Link href="/Home">
          <div>
            <button
              className="  w-xl mt-7 p-2 rounded-xl mb-4"
              style={{ background: "#3b9c3c", color: "white" }}
            >
              LogIn
            </button>
          </div>
          <h1>
            Have acount ?<Link href="Login">Login</Link>{" "}
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default page;

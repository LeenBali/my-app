"use client";
import React from "react";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
const Desc = ({ rate, card }) => {
  const [de, setde] = useState("des");
  return (
    <div>
      <div className="mt-5">
        <button
          className="bg-gray-300 text-black me-4 p-2 w-44 rounded-lg"
          onClick={() => setde("des")}
        >
          Description
        </button>
        <button
          className="bg-gray-300 text-black me-4 w-44 p-2 rounded-lg"
          onClick={() => setde("adds")}
        >
          Additional Information
        </button>
        <button
          className="bg-gray-300 text-black w-44 p-2 rounded-lg"
          onClick={() => setde("rev")}
        >
          Reviews
        </button>
      </div>
      {de === "des" && (
        <div className="mt-5">
          <p>
            In ducimus quod sed eum repellendus ea fugiat. Pariatur et illo at
            iure harum. Molestiae a itaque voluptas
          </p>

          <p>
            explicabo praesentium. Possimus omnis aut architecto et. Repellendus
            ab ipsa in non doloremque tenetur est
          </p>
          <p className="pb-5">doloremque.</p>
          <p>
            Quam in facere soluta consequatur voluptatem beatae asperiores. Qui
            quia itaque illo eos quibusdam
          </p>
          <p className="pb-5">
            voluptatem et. Est aut deserunt iste. Et ipsum eius ut odit
            deleniti.
          </p>
          <p>
            Officia praesentium ipsam perferendis possimus ex culpa voluptatem
            dolore. Aut id sit et vitae. Quis unde
          </p>
          <p>
            doloremque quisquam facere. In qui eos est voluptatem repudiandae
            blanditiis consequatur.
          </p>
        </div>
      )}
      {de === "adds" && (
        <div>
          <p className="border-b-2 p-3 mt-5 me-40">
            Weight <span className="ps-44">190 kg</span>
          </p>
          <p className="pt-3">
            Dimensions<span className="ps-40">3 × 72 × 109 cm</span>{" "}
          </p>
        </div>
      )}
      {/* {de === "rev" && (
        <div className="flex">
          {Array.from({ length: card.rate }, (_, index) => (
            <div key={index}>
              <StarIcon style={{ color: "#3b9c3c" }} />
            </div>
          ))}
          <p>Duc Pham - July 21, 2021</p>
          <div>
            I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the
            chest and shoulders. My only complaint is that it is{" "}
          </div>

          <div>
            <p>
              so long! I like to wear polo shirts untucked. This shirt goes
              completely past my rear end. If I wore it with
            </p>
          </div>
          <div>
            <p>
              ordinary shorts, you probably wouldnt be able to see the shorts at
              all – completely hidden by the shirt. It needs to be 4 to 5 inches
              shorter in terms of length to suit me. I have many RL polo shirts,
              and this one is by far
            </p>
            <p> the longest. I dont understand why.</p>
          </div>
        </div>
      )} */}
      {de === "rev" && (
        <>
          <div className="flex gap-3 mt-5 mb-2">
            <div className="">
              {Array.from({ length: card.rate }, (_, index) => (
                <StarIcon key={index} style={{ color: "#3b9c3c" }} />
              ))}
            </div>
            <p className="font-bold ">Duc Pham - July 21, 2021</p>
          </div>
          <div>
            I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the
            chest and shoulders. My only complaint is that it is{" "}
          </div>
          <div>
            <p>
              so long! I like to wear polo shirts untucked. This shirt goes
              completely past my rear end. If I wore it with
            </p>
          </div>
          <div>
            <p>
              ordinary shorts, you probably wouldnt be able to see the shorts at
              all – completely hidden by the shirt. It
            </p>
            <p>
              {" "}
              needs to be 4 to 5 inches shorter in terms of length to suit me. I
              have many RL polo shirts, and this one is by far
            </p>
            <p> the longest. I dont understand why.</p>
          </div>
          <div className="flex gap-3 mt-5 mb-2">
            <div className="">
              {Array.from({ length: card.rate }, (_, index) => (
                <StarIcon key={index} style={{ color: "#3b9c3c" }} />
              ))}
            </div>
            <p className="font-bold ">Duc Pham - July 21, 2021</p>
          </div>
          <div>
            I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the
            chest and shoulders. My only complaint is that it is{" "}
          </div>
          <div>
            <p>
              so long! I like to wear polo shirts untucked. This shirt goes
              completely past my rear end. If I wore it with
            </p>
          </div>
          <div>
            <p>
              ordinary shorts, you probably wouldnt be able to see the shorts at
              all – completely hidden by the shirt. It
            </p>
            <p>
              {" "}
              needs to be 4 to 5 inches shorter in terms of length to suit me. I
              have many RL polo shirts, and this one is by far
            </p>
            <p> the longest. I dont understand why.</p>
          </div>
          <div className="flex gap-3 mt-5 mb-2">
            <div className="">
              {Array.from({ length: card.rate }, (_, index) => (
                <StarIcon key={index} style={{ color: "#3b9c3c" }} />
              ))}
            </div>
            <p className="font-bold ">Duc Pham - July 21, 2021</p>
          </div>
          <div>
            I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the
            chest and shoulders. My only complaint is that it is{" "}
          </div>
          <div>
            <p>
              so long! I like to wear polo shirts untucked. This shirt goes
              completely past my rear end. If I wore it with
            </p>
          </div>
          <div>
            <p>
              ordinary shorts, you probably wouldnt be able to see the shorts at
              all – completely hidden by the shirt. It
            </p>
            <p>
              {" "}
              needs to be 4 to 5 inches shorter in terms of length to suit me. I
              have many RL polo shirts, and this one is by far
            </p>
            <p> the longest. I dont understand why.</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Desc;

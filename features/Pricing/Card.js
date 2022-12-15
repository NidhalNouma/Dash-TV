import React from "react";

function Card() {
  return (
    <div className="border-[1px] border-primary py-3 px-6 rounded-sm flex flex-col">
      <div className="">
        <span className="px-3 py-1 font-bold text-white bg-primary rounded">
          For traders
        </span>
      </div>
      <div className="mt-4">
        <span className="px-3 py-1 font-bold text-red-600 text-3xl line-through">
          $99
        </span>
      </div>

      <div className="mt-4">
        <span className="px-3 py-1 font-bold text-white text-3xl ">
          Monthly Membership
        </span>
      </div>

      <div className="mt-4">
        <span
          className="px-3 py-1 font-extrabold text-6xl test-transparant"
          style={{
            backgroundImage:
              "linear-gradient(to right top, #ff4a4a,#ff4a4a, #4b45d4, #0260FF, #0034ff)",
            backgroundClip: "text",
          }}
        >
          $69
        </span>
      </div>
    </div>
  );
}

export default Card;

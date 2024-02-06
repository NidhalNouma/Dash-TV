import React, { Fragment } from "react";
import Image from "next/image";

function RightNav() {
  return (
    <Fragment>
      <a
        href="https://app.automatedtrader.com/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="p-4 rounded-lg border border-primary mx-4 text-center">
          <h1 className="">Automate Your</h1>
          <h1 className="flex items-center mt-2">
            <svg
              className="h-4"
              viewBox="0 0 137 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.021324 1.36209L55.4427 1.37104L55.7379 71.19L27.7159 70.9939L27.7077 29.101L-0.00512695 29.0574L0.021324 1.36209Z"
                fill="white"
              />
              <path
                d="M76.3865 28.3816C84.1109 28.3816 90.3727 22.1183 90.3727 14.3921C90.3727 6.66594 84.1109 0.402649 76.3865 0.402649C68.6622 0.402649 62.4004 6.66594 62.4004 14.3921C62.4004 22.1183 68.6622 28.3816 76.3865 28.3816Z"
                fill="white"
              />
              <path
                d="M104.712 1.40878L137 1.44302L107.755 70.6822L75.8085 70.6133L104.489 1.46442L104.712 1.40878Z"
                fill="white"
              />
            </svg>
            <span className="ml-1">TradingView</span>
          </h1>
          <h1 className="mt-2">with</h1>
          <h1 className="flex items-center mt-2">
            <svg
              class="h-4 fill-white"
              viewBox="0 0 73 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M72.5072 0H32.1781L47.0202 63L56.7527 42.623L50.1224 14.4086H66.7893L72.5072 0Z"></path>
              <path d="M23.2972 46.9034L32.9081 22.8488L27.7377 0.72345L0 59.5636H41.6065L38.6259 46.9034H23.2972Z"></path>
              <path
                d="M23.2972 46.9034C23.2972 46.9034 17.5794 59.5636 26.7036 59.5636C35.8278 59.5636 41.6065 59.5636 41.6065 59.5636L38.6259 46.9034H23.2972Z"
                fill="url(#paint0_radial_216_621)"
              ></path>
              <path
                d="M56.7527 42.623L47.0202 63L37.7743 23.934C36.6186 19.0507 40.3291 14.4086 45.3778 14.4086H50.1224L56.7527 42.623Z"
                fill="url(#paint1_radial_216_621)"
              ></path>
              <defs>
                <radialGradient
                  id="paint0_radial_216_621"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(5.27071 56.0881) scale(54.0899 53.6088)"
                >
                  <stop></stop>
                  <stop offset="1" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient
                  id="paint1_radial_216_621"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(32.3255 -2.98667) scale(57.9207 57.4054)"
                >
                  <stop></stop>
                  <stop offset="1" stop-opacity="0"></stop>
                </radialGradient>
              </defs>
            </svg>
            <span className="ml-1">AutomatedTader</span>
          </h1>
        </div>
      </a>
      <a href="" target="_blank" rel="noreferrer">
        <div className="p-4 rounded-lg border border-primary mx-4 text-center mt-3">
          <h1 className="">Hire us to</h1>
          <h1 className="">create your</h1>
          <h1 className="">own strategy</h1>

          <div className="">
            <Image
              className="mx-auto "
              src="/logo.png"
              alt="logo"
              width={140}
              height={140}
            />
          </div>
        </div>
      </a>
    </Fragment>
  );
}

export default RightNav;

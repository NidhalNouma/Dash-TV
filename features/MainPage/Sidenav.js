import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { Button } from "react-daisyui";
import { SignOut } from "../../hooks/SignHook";

function Sidenav({ page }) {
  const router = useRouter();
  return (
    <nav className="flex flex-col max-w-[9rem] items-center mx-1 sm:mx-4 my-2">
      <div className="">
        <Image
          className="mx-auto "
          src="/logo.png"
          alt="logo"
          width={140}
          height={140}
        />
      </div>
      <div className="mt-4">
        <Button
          animation={false}
          className={`${
            page === 2
              ? "bg-primary hover:bg-primary text-white"
              : "bg-transparent"
          }  border-primary px-2 w-32 hover:border-primary text-sm font-semibold`}
          size="md"
          onClick={() => router.push("/membership")}
        >
          membership
        </Button>
      </div>
      <div className="mt-2">
        <Button
          animation={false}
          className={`${
            page === 1
              ? "bg-primary hover:bg-primary text-white"
              : "bg-transparent"
          }  border-primary px-2 w-32 hover:border-primary text-sm font-semibold`}
          size="md"
          onClick={() => router.push("/tradingview")}
        >
          tradingview
        </Button>
      </div>
      <div className="mt-2">
        <Button
          animation={false}
          className={`${
            page === 3
              ? "bg-primary hover:bg-primary text-white"
              : "bg-transparent"
          }  border-primary px-2 w-32 hover:border-primary text-sm font-semibold`}
          size="md"
          onClick={() => router.push("/discord")}
        >
          Discord
        </Button>
      </div>
      <div className="mt-2">
        <Button
          animation={false}
          className={`${
            page === 4
              ? "bg-primary hover:bg-primary text-white"
              : "bg-transparent"
          }  border-primary px-2 w-32 hover:border-primary text-sm font-semibold`}
          size="md"
          onClick={() => router.push("/brokers")}
        >
          Brokers
        </Button>
      </div>

      <div className="mt-4 mx-auto w-full text-center flex items-center  justify-center gap-2 z-50 sticky top-0 bg-black backdrop-blur-lg bg-opacity-80">
        <a
          href="https://www.tiktok.com/@trustedsignals"
          target="_blank"
          rel="noreferrer"
          className="bg-white/30 p-1.5 rounded-full"
        >
          <svg
            className="h-4 w-4"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/trusted.signals"
          target="_blank"
          rel="noreferrer"
          className="bg-white/30 p-1.5 rounded-full"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
          </svg>
        </a>
        <a
          href="https://www.youtube.com/channel/UC1JvTa66cIDWvw5tfwMVU9A?sub_confirmation=1"
          target="_blank"
          rel="noreferrer"
          className="bg-white/30 p-1.5 rounded-full"
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
          </svg>
        </a>
        <a
          href="https://discord.gg/GqBsmRPpER"
          target="_blank"
          rel="noreferrer"
          className="bg-white/30 p-1.5 rounded-full"
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
            <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
            <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"></path>
            <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
          </svg>
        </a>
      </div>

      <div className="mt-2 mx-auto w-full text-center flex sm:flex-row flex-col items-center  sm:items-end justify-between z-50 sticky top-0 bg-black backdrop-blur-lg bg-opacity-80">
        <Button
          className="bg-transparent border-none text-xs hover:bg-transparent mb-auto mx-auto"
          onClick={() => {
            SignOut();
            router.push("/signin");
          }}
        >
          Sign out
        </Button>
      </div>
    </nav>
  );
}

export default Sidenav;

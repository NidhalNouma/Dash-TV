import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button, ButtonGroup } from "react-daisyui";

import { SignOut } from "../../hooks/SignHook";

function Index({ children, page }) {
  const router = useRouter();
  return (
    <main className="h-full">
      <div className="text-white mb-4 flex flex-col h-full">
        <div className="w-full text-center sticky top-0 bg-black pb-4 mb-4 backdrop-blur-lg bg-opacity-80">
          <div className="">
            <Image
              className="mx-auto"
              src="/logo.png"
              alt="logo"
              width={140}
              height={140}
            />
          </div>
          <Button
            className="bg-transparent border-none text-xs hover:bg-transparent absolute right-0 top-0"
            onClick={() => {
              SignOut();
              router.push("/signin");
            }}
          >
            Sign out
          </Button>
          <ButtonGroup>
            <Button
              animation={false}
              className="bg-transparent border-primary w-28 hover:border-primary"
              size="md"
              active={page === 1}
              onClick={() => router.push("/tradingview")}
            >
              tradingview
            </Button>
            <Button
              animation={false}
              className="bg-transparent border-primary w-28 hover:border-primary"
              size="md"
              active={page === 2}
              onClick={() => router.push("/membership")}
            >
              membership
            </Button>
            <Button
              animation={false}
              className="bg-transparent border-primary w-28 hover:border-primary"
              size="md"
              active={page === 3}
              onClick={() => router.push("/videos")}
            >
              videos
            </Button>
          </ButtonGroup>
        </div>
        {children}
      </div>
    </main>
  );
}

export default Index;

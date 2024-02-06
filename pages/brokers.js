import React, { memo } from "react";
import MainPage from "../features/MainPage";
import {
  GetUserContext,
  recheckSubs,
  checkMembership,
} from "../hooks/UserHook";
import checkLifeTime from "../lifetime/check";

import Image from "next/image";

function index() {
  const { fullUser, setFullUser } = GetUserContext();
  let membership = fullUser.paddle?.result;
  // console.log(fullUser);
  if (!membership) {
    const m = checkLifeTime(fullUser.email);
    if (m) membership = { product_id: m };
  }

  const mem = checkMembership(fullUser);
  // console.log(mem);

  return (
    <MainPage page={4}>
      <div className="text-center grow flex flex-col items-center">
        <div className="">
          <p className="">Our trusted brokers</p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <a
            className="p-1 bg-white rounded aspect-auto flex items-center justify-center"
            href="https://cp.fyntura.com/register?franchiseLead=NTU="
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="mx-auto rounded "
              src="/fyntura.jpeg"
              alt="fyntura"
              width={140}
              height={140}
            />
          </a>
          <a
            className="p-1 bg-white rounded aspect-auto flex items-center justify-center"
            href="https://login.hankotrade.com/register?franchiseLead=Mzc1OQ=="
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="mx-auto  "
              src="/hanko.png"
              alt="hanko"
              width={140}
              height={140}
            />
          </a>
        </div>
      </div>
    </MainPage>
  );
}

export default index;

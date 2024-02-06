import React, { memo } from "react";
import MainPage from "../features/MainPage";
import {
  GetUserContext,
  recheckSubs,
  checkMembership,
} from "../hooks/UserHook";
import { getPlanByValue } from "../Constant";
import { LoadBtn } from "../components/Buttons";
import checkLifeTime from "../lifetime/check";

import { Input, Button } from "react-daisyui";

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
    <MainPage page={3}>
      <div className="text-center grow flex flex-col items-center">
        <div className="">
          {!mem?.active ? (
            <div className="mt-3 flex mx-auto">
              <p className="bg-red-600 px-2 py-2 rounded">
                No available active membership!
              </p>
            </div>
          ) : (
            <div className="">
              <a
                className=""
                href="https://discord.gg/GqBsmRPpER"
                target="_blank"
                rel="noreferrer"
              >
                <p className="">
                  Click <span className="underline">here</span> to join our
                  Discord.
                </p>
              </a>
              <p className="mt-3">
                Set your discord username below to get access to our private
                channels.
              </p>
              <div className="mt-2">
                <Input
                  className="bg-transparent border-white"
                  placeholder="Discord username"
                  type="text"
                  //   value={tvusername}
                  //   onChange={(e) => setTVUserName(e.target.value)}
                />
                <LoadBtn
                  loadColor="bg-white"
                  className="ml-2 text-black hover:bg-white my-2"
                  // onClick={async () => await save(setFullUser)}
                >
                  Save
                </LoadBtn>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainPage>
  );
}

export default index;

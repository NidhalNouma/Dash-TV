import React, { Fragment } from "react";
import { Input, Button } from "react-daisyui";
import { LoadBtn } from "../../components/Buttons";
import {
  GetUserContext,
  UserTradingView,
  checkMembership,
} from "../../hooks/UserHook";

import checkLifeTime from "../../lifetime/check";

function Username() {
  const { fullUser, setFullUser } = GetUserContext();
  let membership = fullUser.paddle?.result;
  if (!membership) {
    const m = checkLifeTime(fullUser.email);
    if (m) membership = { product_id: m, state: "active", status: "completed" };
  }

  const { tvusername, setTVUserName, error, save, edit, setEdit, usernames } =
    UserTradingView(fullUser.id, fullUser.tradingViewUserName);

  const mem = checkMembership(fullUser);

  return (
    <Fragment>
      {mem?.active && (
        <div>
          {edit ? (
            <p>Set your tradingview username to get our indicators.</p>
          ) : (
            <p></p>
          )}
        </div>
      )}
      {!mem?.active ? (
        <div className="mt-3 flex mx-auto">
          <p className="bg-red-600  py-2 rounded">
            No available active membership!
          </p>
        </div>
      ) : (
        <div className="mt-4 mx-auto">
          {edit ? (
            <div className="relative block md:flex items-center">
              <div className="flex items-center">
                <span
                  className="mr-2 text-white/50 cursor-pointer"
                  onClick={() => {
                    setEdit(false);
                    setTVUserName(fullUser.tradingViewUserName);
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    className="h-6 w-6 storke-black"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z"></path>
                  </svg>
                </span>
                <Input
                  className="bg-transparent border-white"
                  placeholder="Tradingview username"
                  type="text"
                  value={tvusername}
                  onChange={(e) => setTVUserName(e.target.value)}
                />
              </div>
              <LoadBtn
                loadColor="bg-white"
                className="ml-2 text-black hover:bg-white my-2"
                onClick={async () => await save(setFullUser)}
              >
                Save
              </LoadBtn>

              {
                <div className="w-full absolute bg-gray-600 top-full my-2 rounded-xl max-h-[28vh] overflow-y-scroll">
                  {usernames.map((u, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        setTVUserName(u.username);
                      }}
                      className="cursor-pointer flex items-center px-2 py-1"
                    >
                      <img src={u.userpic} className="h-8 w-8 rounded-full" />
                      <span className="ml-2">{u.username}</span>
                    </div>
                  ))}
                </div>
              }
            </div>
          ) : (
            <div className="">
              <span className="">TradingView UserName: </span>
              <span
                className="px-4 py-2 bg-gray-700 rounded text-sm cursor-pointer my-2"
                onClick={() => setEdit(true)}
              >
                {tvusername}
              </span>
            </div>
          )}
        </div>
      )}
      {/* <div className="flex justify-center my-auto">
        <iframe
          className="rounded-xl w-3/6 aspect-video"
          src="https://www.youtube.com/embed/-ZsQqEYsrQI"
          title="RayPulse -  How To Get TradingView Username"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div> */}
    </Fragment>
  );
}

export default Username;

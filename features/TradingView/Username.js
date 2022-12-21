import React, { Fragment } from "react";
import { Input, Button } from "react-daisyui";
import { LoadBtn } from "../../components/Buttons";
import { GetUserContext, UserTradingView } from "../../hooks/UserHook";

function Username() {
  const { fullUser, setFullUser } = GetUserContext();
  const membership = fullUser.paddle.result;
  const { tvusername, setTVUserName, error, save, edit, setEdit, usernames } =
    UserTradingView(fullUser.id, fullUser.tradingViewUserName);

  return (
    <Fragment>
      {edit ? (
        <p>Set your user tradingview username to get our indicators.</p>
      ) : (
        <p>
          This is your tradingview user name click{" "}
          <spam
            className="bg-gray-600 font-bold py-[1px] px-2 rounded-xl cursor-pointer"
            onClick={() => setEdit(true)}
          >
            here
          </spam>{" "}
          to edit.
        </p>
      )}
      {!membership ||
      (membership.state !== "active" && membership.status !== "completed") ? (
        <div className="mt-3 flex mx-auto">
          <p className="bg-red-600 px-2 rounded-xl">
            No available active membership!
          </p>
        </div>
      ) : (
        <div className="mt-4 mx-auto">
          {edit ? (
            <div className="relative flex items-center">
              <Input
                className="bg-transparent border-white"
                placeholder="Tradingview username"
                type="text"
                value={tvusername}
                onChange={(e) => setTVUserName(e.target.value)}
              />
              <LoadBtn
                loadColor="bg-white"
                className="ml-2 text-black hover:bg-white px-5"
                onClick={async () => await save(setFullUser)}
              >
                Save
              </LoadBtn>

              {
                <div className="w-full absolute bg-gray-600 top-full mt-2 rounded-xl">
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
            <Fragment>
              <span className="px-4 py-2 bg-gray-700 rounded-xl text-sm">
                {tvusername}
              </span>
            </Fragment>
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

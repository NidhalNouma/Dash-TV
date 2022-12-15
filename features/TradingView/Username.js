import React, { Fragment } from "react";
import { Input, Button } from "react-daisyui";
import { GetUserContext, UserTradingView } from "../../hooks/UserHook";

function Username() {
  const { fullUser, setFullUser } = GetUserContext();
  const { tvusername, setTVUserName, error, save, edit, setEdit } =
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
      <div className="mt-4">
        {edit ? (
          <Fragment>
            <Input
              className="bg-transparent border-white"
              placeholder="Tradingview username"
              type="text"
              value={tvusername}
              onChange={(e) => setTVUserName(e.target.value)}
            />
            <Button
              className="ml-2 text-black hover:bg-white px-5"
              onClick={async () => await save(setFullUser)}
            >
              Save
            </Button>
          </Fragment>
        ) : (
          <Fragment>
            <span className="px-4 py-2 bg-gray-700 rounded-xl text-sm">
              {tvusername}
            </span>
          </Fragment>
        )}
      </div>
      <div className="flex justify-center my-auto">
        <iframe
          className="rounded-xl w-3/6 aspect-video"
          src="https://www.youtube.com/embed/-ZsQqEYsrQI"
          title="RayPulse -  How To Get TradingView Username"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Fragment>
  );
}

export default Username;

import React from "react";
import MainPage from "../features/MainPage";
import { GetUserContext } from "../hooks/UserHook";
import { getPlanByValue } from "../Constant";

function index() {
  const { fullUser } = GetUserContext();
  const membership = fullUser.paddle.result;

  return (
    <MainPage page={2}>
      <div className="text-center grow flex flex-col items-center">
        <div className="">
          {!membership ? (
            <div className="">
              <p className="px-2 bg-red-600 rounded-xl">
                No available membership under this email{" "}
                <span className="font-bold">{fullUser.email}</span>{" "}
              </p>
              <p className="mt-3">
                Click{" "}
                <a
                  className="px-2 rounded-xl bg-gray-500"
                  href="https://trustedsignals.com/memberships/"
                >
                  here
                </a>{" "}
                to get your subscription.
              </p>
            </div>
          ) : (
            <div className="">
              <span className="bg-green-700 px-2 rounded-xl">
                You have{" "}
                <span className="font-bold">
                  {getPlanByValue(membership.plan_id.toString())}
                </span>{" "}
                membership
              </span>
              <div className="mt-5">
                <div className="">
                  State:{" "}
                  <span
                    className={`${
                      membership.state === "active"
                        ? "bg-green-700"
                        : "bg-red-600"
                    }  rounded-xl px-2`}
                  >
                    {membership.state}
                  </span>{" "}
                </div>

                <div className="mt-2">
                  click{" "}
                  <a
                    className="bg-gray-500 px-2 rounded-xl"
                    href={membership.update_url}
                  >
                    here
                  </a>{" "}
                  to update your membership.
                </div>
                <div className="mt-2">
                  click{" "}
                  <a
                    className="bg-gray-500 px-2 rounded-xl"
                    href={membership.cancel_url}
                  >
                    here
                  </a>{" "}
                  to cancel your membership.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainPage>
  );
}

export default index;

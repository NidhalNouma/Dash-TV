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
    <MainPage page={2}>
      <div className="text-center grow flex flex-col items-center">
        <div className="">
          {!mem?.active ? (
            <div className="">
              <p className="py-2 px-4 bg-red-600 rounded">
                No available membership under this email{" "}
                <span className="font-bold">{fullUser.email}</span>{" "}
              </p>
              <p className="mt-3">
                Click{" "}
                <a
                  className="px-2 rounded bg-gray-500"
                  href="https://trustedsignals.com/memberships/"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>{" "}
                to get your subscription.
              </p>
              <LoadBtn
                className=" bg-transparent text-white mt-3"
                loadColor="bg-white mt-4"
                variant="link"
                onClick={async () =>
                  await recheckSubs(fullUser.id, setFullUser)
                }
                loadMsg="This may take up to 10 mins please allow it to fully load!"
              >
                Recheck
              </LoadBtn>
            </div>
          ) : (
            <div className="">
              <span className="bg-green-700 px-4 py-2 rounded">
                You have a{" "}
                {/* <span className="font-bold">
                  {getPlanByValue(
                    membership.plan_id
                      ? membership.plan_id.toString()
                      : membership.product_id.toString()
                  )}
                </span>{" "} */}
                membership
              </span>
              <div className="mt-5">
                {mem.status && (
                  <div className="">
                    State:{" "}
                    <span
                      className={`${
                        mem.status === "active" ? "bg-green-700" : "bg-red-600"
                      }  rounded-xl px-2`}
                    >
                      {mem.status}
                    </span>{" "}
                  </div>
                )}

                {/* {membership.update_url && (
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
                )} */}
                {/* {membership.cancel_url && (
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
                )} */}
              </div>
            </div>
          )}
        </div>
      </div>
    </MainPage>
  );
}

export default index;

import React from "react";
import Login from "../features/Login/Login";

function login() {
  return (
    <section className="h-screen">
      <div className="px-6 h-full text-white">
        <div className="flex justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="/bg-login.png"
              className="w-full px-12"
              alt="Sample image"
            />
          </div>

          <div className="xl:ml-20 xl:w-3/12 lg:w-3/12 md:w-8/12 mb-12 md:mb-0">
            <Login />
          </div>
        </div>
      </div>
    </section>
  );
}

export default login;

import React, { Fragment } from "react";
import Third from "./Third";
import Link from "next/link";
import { Button, Input, Alert } from "react-daisyui";
import { LoadBtn } from "../../components/Buttons";

import { SignInHook } from "../../hooks/SignHook";

function IForm() {
  const { email, password, error, setEmail, setPassword, submit } =
    SignInHook();

  return (
    <Fragment>
      <div className="flex flex-row items-center justify-center lg:justify-start">
        <p className="text-lg mb-0 mr-4">Sign in with</p>
        <Third />
      </div>

      <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
        <p className="text-center font-semibold mx-4 mb-0">Or</p>
      </div>

      <div className="mb-6">
        <Input
          className="bg-transparent w-full border-accent"
          placeholder="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <Input
          className="bg-transparent w-full border-accent"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="form-group form-check">
          {/* <input
              type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              id="exampleCheck2"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              for="exampleCheck2"
            >
              Remember me
            </label> */}
        </div>
        <Link
          href="/reset-password"
          className="text-sm underline underline-offset-3"
        >
          Forgot password?
        </Link>
      </div>

      {error && (
        <Alert
          status="error"
          className="my-3 bg-transparent text-red-400 border-2 border-red-400"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 mx-2 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              ></path>
            </svg>
          }
        >
          {error}
        </Alert>
      )}

      <div className="text-center lg:text-left">
        <LoadBtn
          className="bg-primary hover:bg-primary text-white px-8 border-none w-full"
          onClick={async () => await submit()}
        >
          Sign in
        </LoadBtn>

        <p className="text-sm font-semibold mt-2 pt-1 mb-0">
          Don&apos;t have an account?{"  "}
          <Link
            href="/signup"
            className="text-primary hover:opacity-90 focus:opacity-90 transition duration-200 ease-in-out"
          >
            Sign up
          </Link>
        </p>
      </div>
    </Fragment>
  );
}

export default IForm;

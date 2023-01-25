import React, { Fragment } from "react";
import Link from "next/link";
import { Button, Input, Alert } from "react-daisyui";
import { ResetPassword } from "../../hooks/SignHook";

function Forgetpassword() {
  const { email, setEmail, error, succes, submit } = ResetPassword();
  return (
    <Fragment>
      <div className="flex flex-row items-center justify-center lg:justify-start">
        <p className="text-lg mb-0 mr-4">Forgot your password?</p>
      </div>

      {/* <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
        <p className="text-center font-semibold mx-4 mb-0"></p>
      </div> */}

      <div className="mb-6 mt-4">
        <Input
          className="bg-transparent w-full border-accent"
          placeholder="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
        {!succes ? (
          <Button
            onClick={async () => await submit()}
            className="bg-primary hover:bg-primary text-white px-8 border-none w-full"
          >
            Send reset password mail
          </Button>
        ) : (
          <Alert
            status="info"
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            }
          >
            {succes}
          </Alert>
        )}
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

export default Forgetpassword;

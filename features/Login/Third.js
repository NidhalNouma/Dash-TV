import React from "react";
import { Button } from "react-daisyui";
import { LoadBtn } from "../../components/Buttons";
import { ContinueWithGoogle } from "../../hooks/SignHook";

function Third() {
  const { continueWithGoogleClick } = ContinueWithGoogle();
  return (
    <div className="">
      <LoadBtn
        loadColor="bg-white"
        onClick={async () => await continueWithGoogleClick()}
        className="bg-white hover:bg-white font-bold rounded-full"
        startIcon={<GIcon className="h-4 w-4" />}
      ></LoadBtn>
    </div>
  );
}

export default Third;

function GIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
    </svg>
  );
}

import React from "react";
import MainPage from "../features/MainPage";
import Card from "../features/Pricing/Card";

function index() {
  return (
    <MainPage page={2}>
      <div className="text-center grow flex flex-col items-center">
        <div className="grid grid-cols-4 w-10/12">{/* <Card /> */}</div>
      </div>
    </MainPage>
  );
}

export default index;

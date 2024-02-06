import React from "react";
import MainPage from "../features/MainPage";
import Username from "../features/TradingView/Username";

function index() {
  return (
    <MainPage page={1}>
      <div className="text-center grow flex flex-col">
        <Username />
      </div>
    </MainPage>
  );
}

export default index;
